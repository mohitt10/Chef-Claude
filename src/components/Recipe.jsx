import { useState } from "react"

export default function Recipe(props) {
    const [reply, setReply] = useState(null)
    const [loading, setLoading] = useState(false)
    const prompt = `
    You are a professional chef AI.
    The user will provide an array of ingredients. Using ONLY these ingredients (you may add very common pantry items like salt, pepper, oil, or water), suggest ONE recipe.
    Ingredients array: ${props.ingred.join(", ")}
    
    Return the recipe strictly in the following JSON format. Do not include explanations or markdown. Only return the JSON.

    {
        "recipename": RECIPE_NAME,
        "ingredients": ARRAY_OF_INGREDIENTS,
        "instructions": ARRAY_OF_INSTRUCTIONS
    }

    Rules:
    - Return only valid JSON format
    - Do not add any other comments
    `

    async function recipeGetter() {
        try {
            setLoading(true)
            const response = await puter.ai.chat(prompt, {
                model: "claude-sonnet-4-6"
            })
            const text = response.message.content[0].text
            try {
                const parsed = JSON.parse(text)
                setReply(parsed)
                props.onRecipeGenerated(true)
            } catch {
                console.error("Invalid JSON:", text)
                setReply(null)
            }

        } catch (err) {
            console.error(err)
            setReply(null)

        } finally {
            setLoading(false)
        }
    }

    return (
        <div>
            {(props.ingred.length > 3 && !reply) && 
            <div className="Recipe-Box">
                    <div className="recipeContainer">
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe from your list of ingredients</p>
                    </div> 
                    <button onClick={recipeGetter}>{loading ? "Generating..." : "Get Recipe"}</button>
            </div>
            }
            {reply && (
                <div className="Recipe">
                    <h2>{reply.recipename}</h2>
                    <h4>Ingredients:</h4>
                    <ul>
                        {reply.ingredients.map((i, idx) => (
                            <li key={idx}>{i}</li>
                        ))} 
                    </ul>
                    <h4>Instructions:</h4>
                    <ol>
                        {reply.instructions.map((step, idx) => (
                            <li key={idx}>{step}</li>
                        ))}
                    </ol>
                </div>
            )}
        </div>
    )
}
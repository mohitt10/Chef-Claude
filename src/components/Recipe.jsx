import { useState } from "react"

export default function Recipe(props) {
    const [reply, setReply] = useState("")
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
        const response = await puter.ai.chat(prompt, {model: "claude-sonnet-4-6"})
        setReply(response.message.content[0].text)
        return (
            <section>
                <h2>Chef Claude Recommends:</h2>
                <article class="suggested-recipe-container" aria-live="polite">
                    <p>Based on the ingredients you have available, I would recommend making a simple and delicious <strong>RECIPE_NAME</strong>. Here is the recipe:</p>
                    <h3>RECIPE_NAME</h3>
                    <strong>Ingredients:</strong>
                    <ul>
                        <li>ingredient 1</li>
                        <li>ingredient 2</li>
                        <li>ingredient 3</li>
                    </ul>
                    <strong>Instructions:</strong>
                    <ol>
                        <li>Step 1</li>
                        <li>Step 2</li>
                        <li>Step 3</li>
                    </ol>
                </article>
            </section>
        )
    }
    return (
        <div>
            {(props.ingred.length > 3) && 
                <div className="Recipe-Box">
                    <div className="recipeContainer">
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe from your list of ingredients</p>
                    </div> 
                    <button onClick={recipeGetter}>Get Recipe</button>
                </div>
            }
        </div>

    )
}
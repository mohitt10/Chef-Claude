export default function Recipe(props) {
    return (
        <div>
            {(props.ingred.length > 3) && 
                <div className="Recipe-Box">
                    <div className="recipeContainer">
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe from your list of ingredients</p>
                    </div> 
                    <button>Get Recipe</button>
                </div>
            }
        </div>
    )
}
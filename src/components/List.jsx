import Recipe from "./Recipe"
import React from "react";

export function List() {
    const [ingredients, updateIngredients] = React.useState([]);
    const inge = ingredients.map(ing => <li key={ing}>{ing}</li>)

    function ClickHandle(formData) {
        const ingre = formData.get("ingredient")
        if(ingre && ingre.trim() !== "" && !ingredients.includes(ingre)) updateIngredients(prev => [...prev, ingre])
    }

    return (
        <>  
            <form action={ClickHandle} className="ItemAdder">
                <input name="ingredient" placeholder="eg. oregano"/>        
                <button>+ Add Ingredient</button>
            </form>
            <div className="IngredientsList">
            {ingredients.length > 0 && <h2>Ingredients on hand:</h2>}
            <ul>{inge}</ul>
            </div>
            <Recipe ingred={ingredients}/>
        </>
    )
}
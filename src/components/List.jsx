import React from "react";

export function List() {
    const [ingredients, updateIngredients] = React.useState([]);
    const inge = ingredients.map(ing => <li key={ing}>{ing}</li>)

    function ClickHandle(e) {
        e.preventDefault()
        const formData = new FormData(e.target)
        const ingre = formData.get("ingredient")
        if(ingre && ingre.trim() !== "" && !ingredients.includes(ingre)) updateIngredients(prev => [...prev, ingre])
        e.target.reset()
    }

    return (
        <>  
            <form onSubmit={ClickHandle} className="ItemAdder">
                <input name="ingredient" placeholder="eg. oregano"/>        
                <button>+ Add Ingredient</button>
            </form>
            <div className="IngredientsList">
            {ingredients.length > 0 && <h2>Ingredients on hand:</h2>}
            <ul>{inge}</ul>
            </div> 
        </>
    )
}
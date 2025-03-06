import { useState } from "react";

export default function IngredientsList(props){

    const ingredientsElements = props.ingredients.map(i => {
        return <li key={i}>{i}</li>
    })


    return (
        <>
        { props.ingredients.length > 0 && props.ingredients[props.ingredients.length -1] !== "" && <section className="ingredients-section container">
            <h2>Ingredients on hand:</h2>
            <ul>
                {ingredientsElements}
            </ul>
                {props.ingredients.length > 3 && <div className="get-recipe-container">
                    <div ref={props.recipeSection}>
                        <h3>Ready for a recipe</h3>
                        <p>Generate a recipe from your list of ingredients</p>
                    </div>
                    <button onClick={props.getRecipe}>Get Recipe</button>
                </div>}
        </section> 
        }
        </>
    )
}
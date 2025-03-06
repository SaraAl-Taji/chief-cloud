import React, { useEffect, useRef, useState } from "react";
import IngredientsList from "./IngredientsList";
import Recipe from "./Recipe";
import { getRecipeFromMistral } from "../AI";

export default function Main(){

    const [myIngredients, setMyIngredients] = useState([]);
    const [recipe, setRecipe] = useState("");

    const recipeSection = useRef(null);
    console.log('REF: ', recipeSection);

    useEffect(function() {
        if(recipe !== '' && recipeSection.current !== null)
            recipeSection.current.scrollIntoView({behavior: 'smooth'});
    },[recipe]);

    async function getRecipe(){
        const recipeMarkdown = await getRecipeFromMistral(myIngredients);
        setRecipe(recipeMarkdown);
        // setRecipeShown(oldRecipeShown => !recipeShown);
        console.log('Recipe',recipeMarkdown);
    }


    function handleSubmit(formData){
        console.log("I was Submited!");
        if(formData.get("ingredient") !== '')
            setMyIngredients(prevIngredients => [...prevIngredients,formData.get("ingredient")])
        console.log("state:" + myIngredients);
    }

    return(
        <main>
            <form method="POST" action={handleSubmit} className="add-ingredient-form">
                <input id="in" type="text" aria-label="Add Ingredient" placeholder="e.g. orgeno" name="ingredient"></input>
                <button aria-label="Search">Add Ingredient</button>
            </form>
            <IngredientsList recipeSection={recipeSection}  ingredients={myIngredients} getRecipe={getRecipe}/>
            {recipe && <Recipe recipe={recipe}/>}        
        </main>
    )
}
import React from 'react';
import style from './recipe.module.css';
const Recipe = ({ title, calories, image, ingredients }) => {
    return (
        <div className={style.recipe}>
            <h1>{title}</h1>
            <ol><b>Ingredients</b>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <p><u>{calories.toFixed(0)} kcal</u></p>
            <img className={style.image} src={image} alt="/" />
            
        </div>
    )
}

export default Recipe

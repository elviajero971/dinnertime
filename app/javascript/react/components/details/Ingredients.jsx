// src/components/Ingredients.js
import React from 'react';
import Ingredient from './Ingredient';

const Ingredients = ({ ingredients }) => {
    return (
        <div className="p-4">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Ingredients</h2>
            <ul className="list-none space-y-3 flex flex-col justify-center">
                {ingredients.map((ingredient, index) => (
                    <Ingredient key={index} ingredient={ingredient}/>
                ))}
            </ul>
        </div>
);
};

export default Ingredients;

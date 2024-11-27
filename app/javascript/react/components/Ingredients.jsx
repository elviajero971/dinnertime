import React from 'react';

const Ingredients = ({ ingredients }) => {
    // Split ingredients string into an array
    const ingredientsList = ingredients.split(',');

    return (
        <div className="bg-gray-50 rounded-lg shadow-md p-4">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Ingredients</h2>
            <ul className="list-none space-y-3">
                {ingredientsList.map((ingredient, index) => (
                    <li
                        key={index}
                        className="flex items-centerp-2"
                    >
                        <span className="text-gray-700">{ingredient.trim()}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Ingredients;

import React from 'react';

const Ingredient = ({ ingredient }) => {
    return (
        <li className="flex items-center p-2">
            <span className="text-gray-700">{ingredient}</span>
        </li>
    );
};

export default Ingredient;

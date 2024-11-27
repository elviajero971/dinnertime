import React from 'react';

const RecipesListHeader = ({ recipesCount }) => (
    <h1 className="text-2xl mb-2 text-gray-800">List of Recipes: {recipesCount}</h1>
);

export default RecipesListHeader;

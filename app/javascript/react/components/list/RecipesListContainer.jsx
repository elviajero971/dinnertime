import React from 'react';
import Recipe from '../details/Recipe.jsx';

const RecipesListContainer = ({ recipes, lastRecipeRef }) => (
    <ul className="flex flex-wrap justify-center gap-8 w-full p-0 list-none m-0 mx-auto">
        {recipes.map((recipe, index) => (
            <Recipe
                ref={recipes.length === index + 1 ? lastRecipeRef : null}
                key={recipe.id}
                recipe={recipe}
            />
        ))}
    </ul>
);

export default RecipesListContainer;

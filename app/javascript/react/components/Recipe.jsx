// src/components/Recipe/Recipe.jsx
import React, { forwardRef } from 'react';
import { useNavigate } from "react-router-dom";
import { Fade } from 'transitions-kit'
import { AsyncImage } from 'loadable-image';
import Spinner from './Spinner';

// Use forwardRef to handle the ref properly
const Recipe = forwardRef(({ recipe }, ref) => {
    const navigate = useNavigate();

    const navigateToRecipe = () => {
        navigate(`/recipe/${recipe.id}`);
    }

    return (
        <li
            className="border-2 border-gray-300 rounded-lg overflow-hidden w-72 text-left bg-white shadow-md cursor-pointer flex flex-col justify-center transition-transform duration-300 hover:scale-105"
            ref={ref}
            onClick={navigateToRecipe}
        >
            <h2 className="text-xl font-semibold text-gray-800 m-4">{recipe.title}</h2>
            <AsyncImage
                className="w-full h-52 object-cover flex justify-center content-center"
                src={recipe.image_url}
                alt={recipe.title}
                loader={<Spinner />}
                Transition={Fade}
            />
        </li>

    );
});

export default Recipe;

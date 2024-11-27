// src/components/RecipeDetails/RecipeDetails.jsx
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AsyncImage } from 'loadable-image';
import Spinner from './Spinner';
import {Fade} from "transitions-kit";

const RecipeDetails = () => {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate(); // Use the navigate hook

    useEffect(() => {
        const fetchRecipe = async () => {
            try {
                const response = await fetch(`/api/recipes/show?id=${id}`);
                const data = await response.json();
                console.log("data recipe details", data);
                setRecipe(data);
            } catch (error) {
                console.error('Error fetching recipe details:', error);
            }
            setLoading(false);
        };

        fetchRecipe();
    }, [id]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (!recipe) {
        return <p>Recipe not found.</p>;
    }

    return (
        <div className="p-6 max-w-3xl mx-auto bg-white">
            <button
                className="text-blue-500 hover:text-blue-700 font-semibold mb-4"
                onClick={() => navigate('/')}
            >
                &larr; Back to Recipes List
            </button>
            <h1 className="text-2xl font-bold text-gray-800 mb-6">{recipe.title}</h1>
            <AsyncImage
                className="w-full h-64 object-cover rounded-md mb-6 flex justify-center items-center"
                src={recipe.image_url}
                alt={recipe.title}
                loader={<Spinner/>}
                Transition={Fade}
            />
            <p className="text-gray-600 mb-4">
                <strong className="font-semibold">Cook Time:</strong> {recipe.cook_time} minutes
            </p>
            <p className="text-gray-600 mb-4">
                <strong className="font-semibold">Prep Time:</strong> {recipe.prep_time} minutes
            </p>
            <p className="text-gray-600 mb-4">
                <strong className="font-semibold">Ingredients:</strong> {recipe.ingredients}
            </p>
            <p className="text-gray-600 mb-4">
                <strong className="font-semibold">Category:</strong> {recipe.category}
            </p>
            <p className="text-gray-600 mb-4">
                <strong className="font-semibold">Author:</strong> {recipe.author}
            </p>
            <p className="text-gray-600 mb-4">
                <strong className="font-semibold">Ratings:</strong> {recipe.ratings} / 5
            </p>
        </div>

    );
};

export default RecipeDetails;

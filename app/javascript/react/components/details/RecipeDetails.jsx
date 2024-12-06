// src/components/RecipeDetails/RecipeDetails.jsx
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AsyncImage } from 'loadable-image';
import Spinner from '../Spinner';
import { Fade } from "transitions-kit";
import Ingredients from "./Ingredients";
import { fetchRecipeDetailsApi } from '../../api/fetch';
import { formatText, formatTime, formatUrlImageLarge } from '../../utils/formatters';
const RecipeDetails = () => {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchRecipe = async () => {
            try {
                const data = await fetchRecipeDetailsApi(id);
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
        <div className="my-12 w-full mx-auto flex justify-center">
            <div className="w-2/3 flex flex-col justify-center">
                <button
                    className="text-blue-500 hover:text-blue-700 font-semibold mb-4"
                    onClick={() => navigate('/')}
                >
                    &larr; Back to Recipes List
                </button>
                <h1 className="text-3xl font-bold text-gray-800 mb-6">{formatText(recipe.title)}</h1>
                <AsyncImage
                    className="w-full h-96 object-cover rounded-md mb-6"
                    src={formatUrlImageLarge(recipe.image_url)}
                    alt={formatText(recipe.title)}
                    loader={<Spinner/>}
                    Transition={Fade}
                />
                <p className="text-gray-600 mb-4">
                    <strong className="font-semibold">Cook Time:</strong> {formatTime(recipe.cook_time)}
                </p>
                <p className="text-gray-600 mb-4">
                    <strong className="font-semibold">Prep Time:</strong> {formatTime(recipe.prep_time)}
                </p>
                <div className="flex justify-center">
                    <Ingredients ingredients={recipe.ingredients || []}/>
                </div>
                <p className="text-gray-600 mb-4">
                    <strong className="font-semibold">Category:</strong> {formatText(recipe.category)}
                </p>
                <p className="text-gray-600 mb-4">
                    <strong className="font-semibold">Author:</strong> {formatText(recipe.author)}
                </p>
                <p className="text-gray-600 mb-4">
                    <strong className="font-semibold">Ratings:</strong> {recipe.ratings || 'N/A'} / 5
                </p>
                </div>
            </div>
            );
            };

            export default RecipeDetails;

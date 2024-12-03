// src/components/useFetchRecipes.js
import { useState } from 'react';
import { fetchRecipesApi } from '../api/fetch';

const useFetchRecipes = (currentPage, searchQuery) => {
    const [recipes, setRecipes] = useState([]);
    const [recipesCount, setRecipesCount] = useState(0);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);

    const fetchRecipes = async () => {
        if (loading) return;
        setLoading(true);

        try {
            const data = await fetchRecipesApi(currentPage, searchQuery);

            setRecipesCount(data.recipes_count);

            if (currentPage === 1) {
                setRecipes(data.recipes);
            } else {
                setRecipes((prevRecipes) => [...prevRecipes, ...data.recipes]);
            }

            setHasMore(data.recipes.length > 0);
        } catch (error) {
            console.error('Error in useFetchRecipes:', error);
        }

        setLoading(false);
    };

    return { recipes, recipesCount, loading, hasMore, fetchRecipes };
};

export default useFetchRecipes;

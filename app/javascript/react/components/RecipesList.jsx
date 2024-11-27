// src/components/RecipeList.js
import React, { useState, useEffect, useRef } from 'react';
import SearchBar from './SearchBar';
import RecipesListHeader from './RecipesListHeader';
import RecipeContainer from './RecipesListContainer';
import useFetchRecipes from './useFetchRecipes';

const RecipeList = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState('');
    const observer = useRef();

    const { recipes, recipesCount, loading, hasMore, fetchRecipes } = useFetchRecipes(currentPage, searchQuery);

    // Effect to fetch recipes whenever currentPage or searchQuery changes
    useEffect(() => {
        fetchRecipes();
    }, [currentPage, searchQuery]);

    const handleSearch = (search) => {
        setSearchQuery(search);
        setCurrentPage(1);
    };

    const lastRecipeRef = (node) => {
        if (loading) return;
        if (observer.current) observer.current.disconnect();

        observer.current = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && hasMore) {
                setCurrentPage((prevPage) => prevPage + 1);
            }
        });

        if (node) observer.current.observe(node);
    };

    return (
        <>
            <SearchBar onSearch={handleSearch} />
            <RecipesListHeader recipesCount={recipesCount} />
            <RecipeContainer recipes={recipes} lastRecipeRef={lastRecipeRef} />
            {loading && <p>Loading...</p>}
        </>
    );
};

export default RecipeList;

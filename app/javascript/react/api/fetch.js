// ../api/fetch.js

export const fetchRecipesApi = async (currentPage, searchQuery) => {
    try {
        const response = await fetch(
            `/api/recipes/index?page=${currentPage}&search=${searchQuery}`
        );

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Error fetching recipes:', error);
        throw error;
    }
};

export const fetchRecipeDetailsApi = async (id) => {
    try {
        const response = await fetch(`/api/recipes/show?id=${id}`);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Error fetching recipe details:', error);
        throw error;
    }
};

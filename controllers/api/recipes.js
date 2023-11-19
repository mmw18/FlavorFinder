// const express = require('express');
const router = require('express').Router();

// Needing to return information from the API database for recipes

// Recipes endpoint to fetch recipes from API
router.get('/recipes', (req,res) => {
    res.json({
        name: "pizza"
       });
})

const fetchRecipesByCuisine = async (cuisineType) => {
    const url = `https://edamam-recipe-search.p.rapidapi.com/api/recipes/v2?type=public&cuisineType=${cuisineType}&random=true&field=label&field=uri&field=image`;
    const options = {
        method: 'GET',
        headers: {
            'Accept-Language': 'en',
            'X-RapidAPI-Key': '3789202d04mshe307a1aa7bcf028p1ab38cjsn3b66ac280db4',
            'X-RapidAPI-Host': 'edamam-recipe-search.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();

        if (result && result.hits) {
            return result.hits.slice(0, 10); 
        }
        return [];
    } catch (error) {
        console.error(error);
        return null;
    }
};


router.get('/search', (req, res) => {
    res.render('recipesView', { recipes: null });
});

router.get('/results', async (req, res) => {
    const cuisineType = req.query.cuisineType; 
    try {
        const recipes = await recipeModel.fetchRecipesByCuisine(cuisineType);
        res.render('recipesView', { recipes }); 
    } catch (error) {
        res.status(500).render('error', { error: error.message });
    }
});

module.exports = router;
// module.exports = { fetchRecipesByCuisine };
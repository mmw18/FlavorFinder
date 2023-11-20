// const express = require('express');
const router = require('express').Router();
require('dotenv').config();
const fetch = require('node-fetch');

const API_KEY = process.env.API_KEY;

// Needing to return information from the API database for recipes

// Recipes endpoint to fetch recipes from API
// router.get('/recipes', (req,res) => {

//     console.log("Fetching function for API running...")
//     res.json({
//         name: "pizza"
//        });
// })

router.get('/recipes', async (req, res) => {
    // console.log("Fetching function for API running...")
    // Example: Getting the cuisine type from a query string
    const cuisineType = req.query.cuisine; // Assuming the URL is something like "/recipes?cuisine=Italian"

    try {
        const recipes = await fetchRecipesByCuisine(cuisineType);
        console.log(recipes);
        console.log(API_KEY)
        // Further processing or sending the response
        res.json(recipes);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching recipes');
    }
});

const fetchRecipesByCuisine = async (cuisineType) => {
    const url = `https://edamam-recipe-search.p.rapidapi.com/api/recipes/v2?type=public&cuisineType=${cuisineType}&random=true&field=label&field=url&field=image`;
    const options = {
        method: 'GET',
        headers: {
            'Accept-Language': 'en',
            'X-RapidAPI-Key': API_KEY,
            'X-RapidAPI-Host': 'edamam-recipe-search.p.rapidapi.com'
        }
    };

    try {
        // console.log("Fetching function for API running...")
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
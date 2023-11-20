// In recipe-routes.js
const router = require('express').Router();
const fetch = require('node-fetch'); // If you're making an external API call
require('dotenv').config();

const API_KEY = process.env.API_KEY;

router.get('/view-recipes', async (req, res) => {
    const cuisineType = req.query.cuisine;
    try {
        const recipesArray = await fetchRecipesByCuisine(cuisineType);
        // Wrap the array in an object with a key of 'recipes'
        const recipesData = { recipes: recipesArray };
        console.log(recipesData.recipes[0]);
        res.render('recipes', recipesData); 
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

module.exports = router;
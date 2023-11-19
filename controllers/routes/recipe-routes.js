const router = require('express').Router();
// render the recipes home page (grabbing the recipe.handlebar)
router.get('/recipes', (req,res) => {
    console.log("call recipes path");
    res.render('recipes');
})

module.exports = router;
const router = require('express').Router();
// render the recipes home page (grabbing the recipe.handlebar)
router.get('/', (req,res) => {
    console.log("call root path");
    res.render('recipe');
})

module.exports = router;
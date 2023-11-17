const router = require('express').Router();
// render the recipes home page (grabbing the recipe.handlebar)
router.get('/', (req,res) => {
    console.log("call root path");
    res.render('recipe');
})

module.exports = router;

// const { Recipe, Restaurant, User } = require('../../models');

// router.get('/', async (res, req) => {
//     try {
//         res.render('homepage', {
//             logged_in: req.session.logged_in
//         });

//     } catch (err) {
//         res.status(500).json(err);
//     }
// });


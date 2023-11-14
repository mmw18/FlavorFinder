const router = require('express').Router();

const recipeRoutes = require('./routes/recipe-routes');
const restaurantRoutes = require('./routes/restaurant-routes');
const userRoutes = require('./routes/user-routes');
const homeRoutes = require('./routes/home-routes');

router.use('/', homeRoutes);
router.use('/restaurant', restaurantRoutes);
router.use('/recipe', recipeRoutes);
router.use('/user', userRoutes);

module.exports = router;
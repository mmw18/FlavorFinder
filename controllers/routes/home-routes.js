const router = require('express').Router();
const { Recipe, Restaurant, User } = require('../../models');

router.get('/', async (res, req) => {
    





    res.render('homepage')
});
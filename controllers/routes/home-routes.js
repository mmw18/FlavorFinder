const router = require('express').Router();
const { Recipe, Restaurant, User } = require('../../models');

router.get('/', async (res, req) => {
    try {
        res.render('homepage', {
            logged_in: req.session.logged_in
        });

    } catch (err) {
        res.status(500).json(err);
    }
});
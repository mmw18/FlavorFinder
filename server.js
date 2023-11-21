const path = require('path');
const express = require('express');
const sequelize = require('./config/connection');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const recipeAPI = require('./controllers/api/recipes');
const recipeRoutes = require('./controllers/routes/recipe-routes');
const homeRoutes = require('./controllers/routes/home-routes');
const userRoutes = require('./controllers/routes/user-routes');
const exphbs = require('express-handlebars');
const passport = require('passport');
// Initialize Express
const app = express();
const fs = require('fs');


// Set up Handlebars
const hbs = exphbs.create({
    partialsDir: path.join(__dirname, 'views/partials')
});
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');



// Passport Config (Make sure this is after defining the app variable)
require('./config/passport-config')(passport);

// Session configuration
app.use(session({
    secret: 'super secret', // Replace with your own secret
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 1800000 }, // 30 minutes
    store: new SequelizeStore({ db: sequelize })
}));

// Initialize Passport and restore authentication state, if any, from the session
app.use(passport.initialize());
app.use(passport.session());

// Express middleware for parsing requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Route setup
app.use('/', recipeAPI);
app.use('/', recipeRoutes);
app.use('/', homeRoutes);
app.use('/', userRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
});

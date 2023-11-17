const path = require('path');
const express = require('express');
const app = express();
const recipeRoutes = require('./controllers/api/recipes');
const homeRoutes = require('./controllers/routes/home-routes');



const exphbs = require('express-handlebars');
const hbs = exphbs.create({ });
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use('/', recipeRoutes);
app.use('/', homeRoutes);
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


// const session = require('express-session');
// const exphbs = require('express-handlebars');
// const routes = require('./controllers');
// const helpers = require('./utils/helpers');

// const sequelize = require('./config/connection');
// const SequelizeStore = require('connect-session-sequelize')(session.Store);

// const app = express();
// const PORT = process.env.PORT || 3001;

// const hbs = exphbs.create({ helpers });

// app.use(session(sess));

// app.engine('handlebars', hbs.engine);
// app.set('view engine', 'handlebars');

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, 'public')));

// app.use(routes);

// sequelize.sync({ force: false }).then(() => {
//     app.listen(PORT, () => console.log('Now listening'));
// });


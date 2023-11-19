const path = require('path');
const express = require('express');
const sequelize = require('./config/connection');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const recipeRoutes = require('./controllers/api/recipes');
const homeRoutes = require('./controllers/routes/home-routes');
const userRoutes = require('./controllers/routes/user-routes');
const exphbs = require('express-handlebars');
// const { truncate } = require('./models/User');
// const { Sequelize } = require('sequelize');

const app = express();
const hbs = exphbs.create({ });
app.use(session({
    secret: 'super secret',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 1800000 }, // 30 minutes
    store: new SequelizeStore({db:sequelize}),
}));
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', recipeRoutes);
app.use('/', homeRoutes);
app.use('/', userRoutes);





const PORT = process.env.PORT || 3000;
sequelize.sync({force:false}).then(()=>{
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
})




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


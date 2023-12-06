# FlavorFinder

## Description

FlavorFinder is a web application that allows users to discover recipes based on their preferred cuisine. The landing page of this site invited for sign-up or login, in order to access further content. The application utilizes an API to fetch recipe data and showcases it on the webpage. Users can select their desired cuisine type to view a curated list of recipes.

## Installation
- Through Heroku Link 

No Installation required

- Opening in your local

1. Clone code down to your local machine

2. Ensure you have installed all required modules/dependencies
```
npm install axios@1.6.2 bcrypt@5.1.1 connect-session-sequelize@7.1.7 dotenv@16.3.1 express@4.18.2 express-handlebars@7.1.2 express-session@1.17.3 handlebars@4.7.8 mysql2@3.6.3 node-fetch@2.7.0 passport@0.6.0 passport-local@1.0.0 pg@8.11.3 sequelize@6.35.0

```

2. Start the server
```
node server.js
```
    
## Usage

As a user of FlavorFinder, I would like to cook a meal for my friends/family, but don't want to worry about spending so much time finding recipes. When I go to the FlavorFinder application, I can login with the account I have previously created, and be entered into a 30 minute session to see content before I am asked to sign back in for security. After I successfully log in, I simply have to choose the kind of cuisine I am craving, and I am given a list of 10 amazing recipes matching my search, including a recipe photo. I can click on any of these recipes and I am sent to the page where I can view the full recipe.


## Screenshots

![Login screen](./public/assets/login-screenshot.png)
![Recipe list with flavor finder search](./public/assets/recipes-screenshot.png)


## Deployment

The application is deployed and accessible online. You can visit it by clicking the following link: [FlavorFinder App](https://dry-waters-69396-c33e43ba5835.herokuapp.com/)

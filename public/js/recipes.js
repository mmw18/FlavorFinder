console.log("front end recipe js file");

const recipeForm = document.getElementById('recipe-form')

recipeForm.addEventListener('submit', (event) => {
    event.preventDefault();
    fetch('/recipes').then(function (response) {
        return response.json();
    }).then((recipeData) => {
        console.log('Recipe Data', recipeData);
    })
})
// const recipeForm = document.getElementById('recipe-form')

// const recipesContainer = document.getElementById('recipes-container'); // Container to display recipes

// let rData = [];

// recipeForm.addEventListener('submit', (event) => {
//     event.preventDefault();

//        // Access the selected value from the <select> element
//        const selectedCuisine = document.getElementById('cuisineType').value;
//        console.log("Selected Cuisine:", selectedCuisine);

//     fetch(`/recipes?cuisine=${selectedCuisine}`).then(function (response) {
//         return response.json();
//     }).then((recipeData) => {
//         console.log("Fetching function for API running...")
//         console.log('Recipe Data', recipeData);
//         rData.push(recipeData)
//     });
// })

// const recipeForm = document.getElementById('recipe-form');
// let rData = [];

// recipeForm.addEventListener('submit', (event) => {
//     event.preventDefault();
//     const selectedCuisine = document.getElementById('cuisineType').value;

//     fetch(`/recipes?cuisine=${selectedCuisine}`)
//         .then(response => response.json())
//         .then(recipeData => {
//             console.log('Recipe Data', recipeData);
//             rData = recipeData; // Assuming recipeData is an array

//             // Compile Handlebars template
//             const template = document.getElementById('recipe-template').innerHTML;
//             const compiledTemplate = Handlebars.compile(template);

//             // Render the template with data
//             const html = compiledTemplate({ recipes: rData });
//             document.getElementById('recipes-container').innerHTML = html;
//         })
//         .catch(error => console.error('Error fetching recipes:', error));
// });

let rData = [];

document.addEventListener('DOMContentLoaded', (event) => {
    const recipeForm = document.getElementById('recipe-form');
    
    recipeForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const selectedCuisine = document.getElementById('cuisineType').value;

        try {
            const response = await fetch(`/recipes?cuisine=${selectedCuisine}`);
            const data = await response.json();

            console.log('Fetched Data', data);
            rData = data;

            renderRecipes();
        } catch (error) {
            console.error('Error fetching recipes:', error);
        }
    });

    async function renderRecipes() {

        const templateElement = document.getElementById('recipe-template').innerHTML;
        if (!templateElement) {
            console.error('Template element not found');
            return;
        }
         console.log({templateElement})

        const compiledTemplate = Handlebars.compile(templateElement);
        console.log({compiledTemplate})


        const renderedTemplate = compiledTemplate({ recipes: rData });
        console.log({renderedTemplate})

        document.getElementById('recipes-container').innerHTML = renderedTemplate;
        

    }
});





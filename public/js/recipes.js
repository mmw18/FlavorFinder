const recipeForm = document.getElementById('recipe-form')

recipeForm.addEventListener('submit', (event) => {
    event.preventDefault();

       // Access the selected value from the <select> element
       const selectedCuisine = document.getElementById('cuisineType').value;
       console.log("Selected Cuisine:", selectedCuisine);


    // fetch('/recipes').then(function (response) {
    //     return response.json();
    // }).then((recipeData) => {
    //     console.log("Fetching function for API running...")
    //     console.log('Recipe Data', recipeData);
    // })

    fetch(`/recipes?cuisine=${selectedCuisine}`).then(function (response) {
        return response.json();
    }).then((recipeData) => {
        console.log("Fetching function for API running...")
        console.log('Recipe Data', recipeData);
    });
    

})

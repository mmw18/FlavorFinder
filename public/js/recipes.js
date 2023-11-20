document.addEventListener('DOMContentLoaded', () => {
    const recipeForm = document.getElementById('recipe-form');
    
    recipeForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const selectedCuisine = document.getElementById('cuisineType').value;

        if (!selectedCuisine) {
            event.preventDefault();
            alert('Please select an option');
            return;
        }
        // Redirect to the /view-recipes route with the selected cuisine
        window.location.href = `/view-recipes?cuisine=${selectedCuisine}`;
    });
});


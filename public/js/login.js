// Function to handle login form submission
const loginFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  // Log values for debugging
  console.log('call login function');
  console.log('Values: ', email, password);

  if (email && password) {
    // Send a POST request to the API endpoint
    const response = await fetch('/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    // Parse the response data
    const data = await response.json();
    console.log(data);

    // Redirect if login is successful, otherwise display an alert
    if (data.success) {
      window.location.href = '/authenticated';
    } else {
      alert(data.message);
    }
  }
};

// Function to handle signup form submission
const signupFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the signup form
  const name = document.querySelector('#name-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  // Log values for debugging
  console.log('Values before hashing: ', name, email, password);

  if (name && email && password) {
    // Send a POST request to the registration API endpoint
    const response = await fetch('/register', {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    // Display an alert based on the response status
    if (response.ok) {
      alert('You have successfully created an account.');
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }
};

// Event listeners for form submissions
document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);

document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);

const loginFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();
  console.log('call login function')
  console.log("Values: ", email, password)
  if (email && password) {
    // Send a POST request to the API endpoint
    const response = await fetch('/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });
    // console.log(response);
    const result = await response.json();
    console.log(result);
    if (response.ok) {
      // If successful, redirect the browser to the profile page
      document.location.replace('/');
      console.log('user login');
    } else {
      // alert('Please enter correct email and password.');
      document.getElementById('error-msg').textContent = result.message;
    }
  }
};





const signupFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#name-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  console.log("Values before hashing: ", name, email, password)

  if (name && email && password) {
    const response = await fetch('/register', {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });
    const result = await response.json();
    console.log(result);
    if (response.ok) {
      // If successful, redirect the browser to the profile page
      document.location.replace('/');
      console.log('user login');
      alert("You have succesfully created an account.");
      document.location.replace('/');
    } else {
      // alert('Please enter correct email and password.');
      document.getElementById('error-msg').textContent = result.message;
    }
    // if (response.ok) {
    //   document.location.replace('/profile');
    // } else {
    //   alert(response.statusText);
    // }
  }
};

document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);

document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);

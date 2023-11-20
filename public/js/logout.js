const logout = async () => {
  const response = await fetch('/logout', {    
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });
  console.log(response);
  if (response.ok) {
    document.location.replace('/');
    console.log('user logged out');
  } else {
    alert(response.statusText);
  }
};



document.querySelector('#logout').addEventListener('click', logout);

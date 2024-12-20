function handleLogin(e) {
    e.preventDefault();
    const username = document.getElementById('userName').value;
    const password = document.getElementById('password').value;
    const loginData = { Username: username, Password: password };
    fetchData(loginData);
}

async function fetchData(loginData) {
    console.log(loginData)
    try {
        const response = await axios.post(' link', loginData);
        console.log(response.data)
            window.location.href = '';  //link need
        }
     catch (error) {
        console.error('Error during login request:', error);
        alert('Something went wrong. Please try again later.');
    }
}


function toggleForms() {
    window.location.href = 'Signup.html';
}

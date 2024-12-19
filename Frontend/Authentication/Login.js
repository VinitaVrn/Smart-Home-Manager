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
<<<<<<< HEAD
        const response = await axios.post('http://localhost:4000/user/login', loginData);
        console.log(response.data)
=======
        const response = await axios.post('https://669b-2401-4900-7b15-c1a8-1df5-bee8-d117-c8fa.ngrok-free.app/user/login', loginData);
>>>>>>> fb588f535bf3eb8da69ebe33757cc8b711e9e9fb
        if (response.data.success) {
            window.location.href = 'not have link';  //link need
        } else {
            alert('Invalid username or password. Please try again.');
        }
    } catch (error) {
        console.error('Error during login request:', error);
        alert('Something went wrong. Please try again later.');
    }
}

function toggleForms() {
    window.location.href = 'Signup.html';
}

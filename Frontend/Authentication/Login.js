function handleLogin(e) {
    e.preventDefault();
    const username = document.getElementById('userName').value;
    const password = document.getElementById('password').value;
    const loginData = { Username: username, Password: password };
    fetchData(loginData);
}

async function fetchData(loginData) {
    try {
        const response = await axios.post('not have link', loginData);
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

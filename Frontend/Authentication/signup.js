document.addEventListener("DOMContentLoaded" , function(){

    const signupForm = document.getElementById('signupForm')
    signupForm.addEventListener('submit' , function(e){
        e.preventDefault()
        const name = document.getElementById('name').value
        const email = document.getElementById('email').value
        const username = document.getElementById('username').value
        const password = document.getElementById('password').value

        const userData = { Name: name, Email: email,Username: username,Password: password}
        registerUser(userData)
    })
})

async function registerUser(userData) {
    try {
        const response = await axios.post("http://localhost:4000/user/signup", userData);
        console.log(response.data);
        
        // Save username to localStorage
        localStorage.setItem('username', userData.Username);
        
        window.location.href = '../SetupDevice/setupDevice.html';
    } catch (error) {
        console.error("Error during registration:", error);
        // alert('Something went wrong. Please try again.');
    }
}


function toggleForms() {
    window.location.href = 'Login.html';
}
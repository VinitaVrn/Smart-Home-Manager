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

async function registerUser(userData){
    console.log(userData)
    try {
        const response = await axios.post("http://localhost:4000/user/signup" , userData) 
        //    //   Api link need
        console.log(response.data)
        if (response.data.success) {
            window.location.href = 'not have link';               //   Api link need
        } else {
            alert('Invalid username or password. Please try again.');
        }
    }catch(error){
        console.log('Error during API call:', error);
            alert('Something went wrong. Please try again.')
    }
}
function toggleForms() {
    window.location.href = 'Login.html';
}
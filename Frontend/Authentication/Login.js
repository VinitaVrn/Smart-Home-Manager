function handleLogin(e) {
    e.preventDefault();
    const username = document.getElementById('userName').value.trim();
    const password = document.getElementById('password').value.trim();

    if (!username || !password) {
        alert("Please enter both username and password.");
        return;
    }

    const loginData = { Username: username, Password: password };
    fetchData(loginData);
}

// async function fetchData(loginData) {
//     try {
//         const response = await axios.post('http://localhost:4000/user/login', loginData);
//         const users = response.data;
//         console.log(users);
//         if (!users) {
//             alert("No users found. Please sign up first.");
//             return;
//         }

//         // Check if user exists
//         let validUser = false;

//         // switching userid to user
//         for (const userId in users) {
//             const user = users[userId];
//             // checking data from the database
//             if (user.Username === loginData.Username && user.Password === loginData.Password) {
//                 validUser = user; 
//                 break;
//             }
//         }
//         if (validUser) {
//             localStorage.setItem('username', validUser.Username);
//             window.location.href = '../Dashboard.html'; 
//         } else {
//             alert("Invalid username or password. Please try again.");
//         }

//     } catch (error) {
//         console.error("Error during login request:", error);
//         alert("Something went wrong. Please try again later.");
//     }
// }

async function fetchData(loginData) {
    console.log(loginData)
    try {
        localStorage.setItem('username', loginData.Username);
        const response = await axios.post('https://smart-home-manager-backend.onrender.com/user/login', loginData);
        console.log(response.data)
        // if (response.data.success) {
            window.location.href = '../Dashboard.html';  //link need
        //  }  
        }
     catch (error) {
        console.error('Error during login request:', error);
        alert('Something went wrong. Please try again later.');
    }
}

function toggleForms() {
    window.location.href = 'Signup.html';
}

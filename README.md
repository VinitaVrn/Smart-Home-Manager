# V-Smartz: Smart Home Manager

## Introduction

This project aims to create a centralized hub that brings all smart devices under one roof, allowing users to control and monitor every room and device from a single platform. By providing a unified interface for device control, routine automation, and energy tracking, we’re making smart homes not just more efficient but also easier to manage."

## Key Features

1. *Control Everything in One Place*: You can control your lights, thermostat, security cameras, and appliances from one app.
2. *Save Energy*: V-Smart helps reduce energy waste by letting you monitor and manage power usage, which can lower your electricity bills.
3. *Make Life Easier*: Automate everyday tasks like turning off lights or adjusting the temperature so you don’t have to do it manually.
4. *Easy to Use*: Whether you have physical challenges or just want things to be simpler, V-Smart makes controlling your home easy for everyone.

## Problems It Solves

1. *High Energy Bills*: It helps you save energy by making your home more efficient.
2. *Too Many Devices to Manage*: It puts all your smart devices in one place, making it easy to control everything from your phone.
3. *Time-Consuming Tasks*: It saves you time by automating common tasks like adjusting your thermostat or turning off the lights.
4. *Accessibility*: It helps people with disabilities or the elderly control their home easily.

## Project Type
Fullstack

## Deployed App

- *Frontend*:https://vsmarthomes.netlify.app/
- *Backend*: [Backend Code](https://gilded-bombolone-56ee64.netlify.app/)


## Directory Structure


Smart-Home-Manager
├── Backend
│   ├── .husky
│   ├── controller
│   ├── middlewares
│   ├── models
│   ├── node_modules
│   ├── routes
│   ├── .gitignore
│   ├── index.js
│   ├── package-lock.json
│   ├── package.json
│   └── README.md
│
├── Frontend
    ├── Authentication
    │   ├── Login.css
    │   ├── Login.html
    │   ├── Login.js
    │   ├── README.md
    │   ├── Signup.css
    │   ├── Signup.html
    │   ├── Signup.js
    │   └── vsmart.png
    ├── EditDevices
    │   ├── bgblack.png
    │   ├── clear-backgroundLogo.png
    │   ├── editForm.css
    │   ├── editForm.html
    │   ├── editForm.js
    │   ├── logo.png
    │   ├── logo2.png
    │   └── transparent_vsmart.png
    ├── SetupDevice
    │   ├── bgblack.png
    │   ├── clear-backgroundLogo.png
    │   ├── logo.png
    │   ├── setupDevice.css
    │   ├── setupDevice.html
    │   ├── setupDevice.js
    │   └── transparent_vsmart.png
    ├── Wifi.js
    ├── yourRoom.js
    ├── addRoutine.html
    ├── alerts.html
    ├── Dashboard.css
    ├── Dashboard.html
    ├── Dashboard.js
    ├── EnergyUsage.html
    ├── README.md
    ├── useFLow.text


## Video Walkthroughs

- *Project-Feature Overview*: https://drive.google.com/file/d/1e3_CD80ZYo1M5nrTh9ijCiyWgwaaqPxj/view?usp=sharing

- *Codebase Overview*: https://drive.google.com/file/d/1zc_QC_V5o_VnVLoQJ13Ub6FG3739jGhf/view?usp=sharing

## Design Decisions & Assumptions

### Design Decisions

1. *Frontend and Backend*:

   - *Frontend*: Handles what the user sees (built with HTML, CSS, and JavaScript).
   - *Backend*: Handles the behind-the-scenes logic and data (built with Node.js).

2. *Database Choice*: A database will store all user data, device settings, and routines. It could be either a NoSQL database like MongoDB or a relational database like MySQL.

3. *Modular Design*: Each feature, like login, device setup, and the dashboard, is built as a separate part, making the code easier to manage.

4. *APIs for Communication*: The frontend and backend communicate using APIs to send and receive data, like user login or device information.

5. *Device Compatibility*: V-Smart will work with common smart devices that use Wi-Fi.

6. *Responsive Design*: The system will work smoothly on phones, tablets, and desktops, so users can control their smart home from anywhere.

7. *Secure Login*: User accounts will have strong password protection and secure data transfer to keep everything safe.

8. *Scalable System*: The system is designed to grow easily, allowing more users and devices to be added in the future.

9. *Error Handling*: Errors and issues will be logged properly to make troubleshooting easier.

### Assumptions

1. *User Base*: The initial user base will primarily consist of individual homeowners. Future versions may scale to include support for commercial buildings.
2. *Network Availability*: Assumes users have a reliable internet connection for real-time device control and data synchronization.
3. *Device Support*: Assumes that users already have or will purchase smart devices compatible with the system.
4. *Data Storage*: Assumes storing user data and device configurations in a secure database is sufficient.
5. *Third-Party APIs*: Assumes reliance on third-party APIs for features like smart routines and device integrations.
6. *Automation Logic*: Assumes users will set up routines and automation rules manually, with future AI-driven automation planned.
7. *User Devices*: Assumes end-users will interact with the system primarily through modern web browsers or mobile devices.
8. *Security Awareness*: Assumes users will follow basic security practices.
9. *No Hardware Dependencies*: Assumes that the system does not require specialized hardware and can operate on widely available IoT devices.

## Installation & Getting Started

1. Clone the project repository:

   bash
   git clone  link ###################
   cd v-smart
   

2. Install dependencies:

   bash
   npm install
   

3. Start the application:

   bash
   npm run dev
   

## Usage

1. Open your browser and navigate to http://localhost:3000 (or the port specified in the project).
2. Create an account or log in to start using the smart home features.
3. Set up your smart devices and view dashboards.

## Screenshots

[Drive Link to Screenshots](#)

## Credentials

To access authenticated pages, use the following demo credentials (or set up your own during testing):

- *User*:
  - Username: user123
  - Password: user

## API Endpoints
http://localhost:4000/user/signup
http://localhost:4000/user/login
http://localhost:4000/roomNdevice/create
http://localhost:4000/roomNdevice/send/${username}
http://localhost:4000/roomNdevice/updateState
http://localhost:4000/routine/get/${username}
http://localhost:4000/routine/create
http://localhost:4000/routine/update
http://localhost:4000/routine/delete

### Authentication

- POST /api/auth/login: Logs in a user.

  *Request Example:*

  json
  {
    "email": "user123",
    "password": "user"
  }
  

  *Response Example:*

  json
  {
    "token": "jwt_token_here"
  }
  

- POST /api/auth/signup: Creates a new user.

  *Request Example:*

  json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "username": "user123",
    "password": "password123"
  }
  

### Devices

- GET /api/devices: Retrieve all connected devices.
- POST /api/devices: Add a new device.

  *Request Example:*

  json
  {
    "name": "Living Room Light",
    "type": "light",
    "status": "off"
  }
  

### Routines

- GET /api/routines: Retrieve all routines.
- POST /api/routines: Create a new routine.

## Technology Stack

- *Node.js*: For backend logic and server-side scripting.
- *MongoDB*: NoSQL database for storing user data, devices, and routines.
- *Frontend*: HTML/CSS/JavaScript and React.js for designing the user interface.

### Other Libraries/Modules

- axios: For HTTP requests.
- Express: For creatings routes,handling http requests ,middleware integrations
- JWT: (Json web token) for authentication purposes, creating token
- argon2: For Hashing the passwords
- mongoose : for mongoDB connection, storing data
- CORS : Origin Resourse Sharing - For allowing other domains to access our API
- dotenv : For storing confidential data

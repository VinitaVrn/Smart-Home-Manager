document.addEventListener("DOMContentLoaded", function () {
    const username = localStorage.getItem("username");
    
    if (username) {
        document.getElementById("welcome").textContent = `Welcome, ${username}!`;
    } else {
        document.getElementById("welcome").textContent = "Welcome, Guest!";
    }
});



// updateEnergyUsage


const energyElement = document.getElementById('energyValues');
let currentValue = 0.0;


function updateEnergyValue() {
    currentValue += Math.random() * 0.5; 
    energyElement.textContent = `${currentValue.toFixed(2)} kWh`;
}


setInterval(updateEnergyValue, 1000);
    //   /////
const energy = document.getElementById("ene")
let curr = 50
function updateValue() {
    curr += Math.random() * 0.5; 
    ene.textContent = `${curr.toFixed(2)} kWh`;
}


setInterval(updateValue, 1000);

//                       ////////////
function updateThermostat() {
    const slider = document.getElementById('thermostat-range');
    const statusElement = document.getElementById('thermostat-status');
    const value = slider.value;
    statusElement.textContent = `Temperature: ${value}°C`;
}


// alert
function toggleAlert() {
    const message = "Alert: Device is using more energy than usual";
    document.getElementById('alert-message').textContent = message;
    
    let alertBox = document.getElementById('alert-box');
    
    if (!alertBox.classList.contains('show')) {
        alertBox.style.display = 'block';
        alertBox.classList.add('show');
    }
    
 
}

function closeAlert() {
    let alertBox = document.getElementById('alert-box');
    alertBox.classList.remove('show');
    setTimeout(function() {
        alertBox.style.display = 'none';
    }, 500);
}
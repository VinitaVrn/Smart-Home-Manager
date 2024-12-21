function updateEnergyUsage() {
    const randomEnergyUsed = (Math.random() * 10 + 5).toFixed(1); 
    const randomEnergySaved = (Math.random() * 3 + 1).toFixed(1); 

    document.getElementById('heater-energy').textContent = randomEnergyUsed;
    document.getElementById('heater-savings').textContent = randomEnergySaved;
    document.getElementById('heater-time').textContent = `${Math.floor(Math.random() * 5)} hours ago`;

    document.getElementById('ac-energy').textContent = randomEnergyUsed;
    document.getElementById('ac-savings').textContent = randomEnergySaved;
    document.getElementById('ac-time').textContent = `${Math.floor(Math.random() * 5)} hours ago`;

    document.getElementById('lights-energy').textContent = randomEnergyUsed;
    document.getElementById('lights-savings').textContent = randomEnergySaved;
    document.getElementById('lights-time').textContent = `${Math.floor(Math.random() * 5)} minutes ago`;
}

setInterval(updateEnergyUsage, 10000);

function toggleAlert() {
   alert("Alert: Device is using more energy than usual");
    //document.getElementById('alert-box').classList.toggle('show');
}

// function closeAlert() {
//     document.getElementById('alert-box').classList.remove('show');
// }

// function dashboard(){
//     window.location.href = "../Dashboard.html";
// }
updateEnergyUsage();

function toggleDevice(statusId, checkbox) {
    const statusElement = document.getElementById(statusId);
    statusElement.textContent = checkbox.checked ? 'Status: On' : 'Status: Off';
}

function updateThermostat(statusId, value) {
    const statusElement = document.getElementById(statusId);
    statusElement.textContent = `Temperature: ${value}°C`;
}
function toggleAlert() {
    const alertBox = document.getElementById('alert-box');
    alertBox.classList.toggle('show');
    alertBox.classList.remove('hide');
}

function closeAlert() {
    const alertBox = document.getElementById('alert-box');
    alertBox.classList.add('hide');
    setTimeout(() => {
        alertBox.classList.remove('show', 'hide');
    }, 500); // Match the transition time to hide it after animation
}

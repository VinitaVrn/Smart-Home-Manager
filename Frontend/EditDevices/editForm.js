//              // Light increase/decrease
const rangeInputs = document.querySelectorAll('input[type="range"]');
rangeInputs.forEach(slider => {
    console.log(slider.value); 
});

//              // DashBoard 
function DashBoard() {
    window.location.href = 'dashboard-link'; // Replace with actual dashboard link
}

//             // Rooms remover
async function RemoveRooms() {
    const confirmation = confirm('Are you sure you want to delete this room?');
    if (!confirmation) return; 

    try {
        const response = await axios.delete('delete-room-link');      // Delete room API link
        if (response.status === 200) {
            DashBoard(); 
        } else {
            alert('Failed to delete the room. Please try again.');
        }
    } catch (error) {
        alert('An error occurred while deleting the room.');
    }
}

/// //////////////////// Update WiFi status (Online/Offline)
function updateWifiStatus(isOnline) {
    const wifiStatus = document.getElementById('wifiStatus');
    wifiStatus.textContent = isOnline ? 'Online' : 'Offline';
    wifiStatus.style.color = isOnline ? 'green' : 'red'; 

    const allDevices = document.querySelectorAll('.section');
    allDevices.forEach(section => {
        const statusButton = section.querySelector('.status');
        const slider = section.querySelector('input[type="range"]');

        if (!isOnline) {
            statusButton.disabled = true;          // Disable buttons when offline
            slider && (slider.disabled = true);
        } else {
            statusButton.disabled = false;         // Enable buttons when online
            slider && (slider.disabled = false);
        }
    });
}

//         // WiFi status update every 5 seconds
setInterval(() => {
    const isOnline = Math.random() > 0.5;       // Simulate online/offline status
    updateWifiStatus(isOnline);                  // Update WiFi status on interval
}, 5000);

//              // Fetch room data from API
async function fetchRoomData() {
    try {
        const response = await axios.get('get-room-data-link');      // Replace with actual link
        const devices = response.data;                              // Get devices data from API response

        devices.forEach((device) => {
            const deviceSection = document.getElementById(device.name.toLowerCase());
            if (deviceSection) {
                deviceSection.style.display = 'block';              // Show the device section

                const statusButton = deviceSection.querySelector('.status');
                const slider = deviceSection.querySelector('input[type="range"]');

                if (device.status === 'On') {
                    statusButton.textContent = 'Off';                    
                    statusButton.style.backgroundColor = 'green';        
                    slider && (slider.disabled = false); 
                } else {
                    statusButton.textContent = 'On'; 
                    statusButton.style.backgroundColor = '#f23131'; 
                    slider && (slider.disabled = true); 
                }

                if (device.offline) {
                    statusButton.disabled = true; 
                    slider && (slider.disabled = true); 
                }
            }
        });

        const allSections = document.querySelectorAll('.device-grid form');
        allSections.forEach((section) => {
            const id = section.id;
            if (!devices.some(device => device.name.toLowerCase() === id)) {
                section.style.display = 'none'; 
            }
        });

    } catch (error) {
        alert('An error occurred while fetching room data.');
    }
}

//                       // Toggle status button functionality
const statusButtons = document.querySelectorAll('.status');
statusButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (!button.disabled) {
            if (button.textContent === 'Off') {
                button.textContent = 'On'; // Toggle text to 'On'
                button.style.backgroundColor = '#f23131'; 
            } else {
                button.textContent = 'Off'; // Toggle text to 'Off'
                button.style.backgroundColor = 'green';
            }
        }
    });
});

fetchRoomData();

//                      // Device delete functionality
async function deviceDelete() {
    const confirmation = confirm('Are you sure you want to delete this device?');
    if (!confirmation) return; 

    try {
        const res = await axios.delete('delete-device-link');        //  link APi link
        console.log('Device deleted'); 
    } catch (err) {
        alert('An error occurred while deleting the device.');
    }
}

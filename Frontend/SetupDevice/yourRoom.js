async function YourRoom() {
    const createRoom = document.getElementById("createRoom");
    const username = localStorage.getItem("username");
    console.log("Username retrieved from localStorage:", username);

    if (!username) {
       window.location.href = './Authentication/Login.html'
        return;
    }

    try {
        const response = await axios.get(`http://localhost:4000/roomNdevice/send/${username}`);
        const rooms = response.data;
        console.log("Rooms fetched:", rooms);

        if (rooms.length === 0) {
            createRoom.innerHTML = "<p>No rooms found for this user.</p>";
            return;
        }

        // Generate HTML content for rooms and devices
        createRoom.innerHTML = rooms
            .map((room) => `
            
                <div class="room" key="${room._id}">
                    <h4>
                        <button 
                            class="btn btn-primary room-button"
                            onclick="goToRoom('${room._id}')">
                            ${room.roomname}
                        </button>
                    </h4>
                    <div class="devices">
                        ${room.device
                            .map((device) => `
                           
                                <div class="device" class="card-body">
                                    <span>${device.devicename}</span>
                                    <button 
                                        onclick="toggleDeviceState('${device._id}', ${device.state})" 
                                        class="btn ${device.state ? 'btn-success' : 'btn-secondary'}">
                                        ${device.state ? 'Turn Off' : 'Turn On'}
                                    </button>
                                </div>
                                  <div class="View">
                                <button class="ViewDevice" onclick="EditForm()">View</button>
                            </div>
                                
                            `)
                            .join("")}
                    </div>
                </div>
            `)
            .join("");

     
    } catch (error) {
        console.error("Error fetching rooms:", error.response?.data || error.message);
        createRoom.innerHTML = ` <div class="card-body"><p>Failed to load rooms. Please try again later.</p></div>`
    }
}

// Function to toggle the state of a device
async function toggleDeviceState(deviceId, currentState) {
    try {
        const newState = !currentState; // Toggle the state
        await axios.patch(`http://localhost:4000/roomNdevice/updateState`, { state: newState });
        YourRoom(); // Refresh the rooms and devices
    } catch (error) {
        console.error("Error toggling device state:", error.response?.data || error.message);
        alert("Failed to toggle device state. Please try again.");
    }
}

// Function to navigate to a specific room
function goToRoom(roomId) {
    window.location.href = `/room/${roomId}`;
}

// Function to navigate to the setup device page
function goToSetupDevice() {
    window.location.href = "SetupDevice/setupDevice.html";
}

// Initialize the rooms on page load
YourRoom();

function EditForm(){
    window.location.href = "./EditDevices/editForm.html"
}
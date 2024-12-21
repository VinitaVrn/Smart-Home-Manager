//username match with the username in the database
//render devices name, state, and room name,
// Room name is a button that will take you to the room page
//state is a toggle button that will turn on or off the device 
//add a button to redirect to  setup device page

async function YourRoom() {
    const createRoom = document.getElementById("createRoom");
    const username = localStorage.getItem("username");
  console.log("Username retrieved from localStorage:", username);

    if (!username) {
        createRoom.innerHTML = "<p>Please log in to view your rooms.</p>";
        return;
    }

    try {
       
        const response = await axios.get(`http://localhost:4000/roomNdevice/send/${username}`);
        const rooms = response.data;
       console.log("Rooms fetched:", rooms);

      
    //     const userRooms = rooms.filter(room => room.username === username);

    //    console.log(userRooms)
    //     if (userRooms.length === 0) {
    //         createRoom.innerHTML = "<p>No rooms found for this user.</p>";
    //         return;
    //     }
     
        rooms.innerHTML = userRooms.map(room => `
            <div key="${room.id}" >
                <h4>${room.name}</h4>
                <div>
                    ${room.devices.map(device => `
                        <div >
                            <span>${device.name}</span>
                            <button 
                                onclick="toggleDeviceState('${device.id}', ${device.state})" 
                                class="btn ${device.state ? 'btn-success' : 'btn-secondary'}">
                                ${device.state ? 'Turn Off' : 'Turn On'}
                            </button>
                        </div>
                    `).join('')}
                </div>
            </div>
        `).join('');
    } catch (error) {
        // console.error("Error fetching rooms:");
        createRoom.innerHTML = "<p>Failed to load rooms. Please try again later.</p>";
    }
}

// async function toggleDeviceState(deviceId, currentState) {
//     try {
//         const newState = !currentState; // Toggle the state
//         await axios.patch(`http://localhost:4000/device/toggle/${deviceId}`, { state: newState });
//         YourRoom(); // Refresh the rooms and devices
//     } catch (error) {
//         console.error("Error toggling device state:", error.response?.data || error.message);
//         alert("Failed to toggle device state. Please try again.");
//     }
// }

// Initialize the rooms on page load
YourRoom();

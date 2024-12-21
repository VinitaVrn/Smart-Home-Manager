//username match with the username in the database
//render devices name, state, and room name,
// Room name is a button that will take you to the room page
//state is a toggle button that will turn on or off the device 
//add a button to redirect to  setup device page


async function YourRoom() {
    const createRoom = document.getElementById("createRoom");
    const username = localStorage.getItem("username");

    try {
        // Fetch rooms and devices from the backend
        const response = await axios.get("http://localhost:4000/roomNdevice/getroom");
        const rooms = response.data;

        // Filter rooms for the logged-in user
        const userRooms = rooms.filter(room => room.username === username);

        // Generate HTML for rooms and devices
        createRoom.innerHTML = userRooms.map(room => `
            <div key="${room.id}" class="card my-3">
                <div class="card-body">
                    <button onclick="navigateToRoom('${room.id}')" class="btn btn-primary room-btn">
                        ${room.name}
                    </button>
                    <div class="devices mt-3">
                        ${room.devices.map(device => `
                            <div class="d-flex align-items-center justify-content-between my-2">
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
            </div>
        `).join('');

     
async function addRoom(e) {
    e.preventDefault();

    const roomName = document.getElementById("homePart").value;
    const customRoom = document.getElementById("customRoom").value;
    const device1 = document.getElementById("device1").value;
    const device2 = document.getElementById("device2").value;
    const device3 = document.getElementById("device3").value;
    const device4 = document.getElementById("device4").value;
    const device5 = document.getElementById("device5").value;
    const device6 = document.getElementById("device6").value;

    const roomname = roomName === "custom" ? customRoom : roomName;

    const devices = [];
    if (device1) devices.push({ devicename: "Lamps", state: false });
    if (device2) devices.push({ devicename: "TV", state: false });
    if (device3) devices.push({ devicename: "Fan", state: false });
    if (device4) devices.push({ devicename: "Light", state: false });
    if (device5) devices.push({ devicename: "RGBLight", state: false });
    if (device6) devices.push({ devicename: "SwitchBoard", state: false });

    const username = localStorage.getItem("username");

    if (!username) {
        alert("Username not found. Please log in again.");
        return;
    }

    const roomData = { username, roomname, device: devices };

    try {
        const res = await axios.post("http://localhost:4000/roomNdevice/create", roomData);
        if (res.status === 200) {
            alert("Room Added Successfully");
            document.getElementById("roomForm").reset();
            document.getElementById("customRoomDiv").style.display = "none";
        } else {
            alert("Failed to add room. Please try again.");
        }
    } catch (error) {
        console.error("Error adding room:", error);
        alert("An error occurred while adding the room.");
    }
}

async function getDevices() {
    const username = localStorage.getItem("username");

    if (!username) {
        alert("Username not found. Please log in again.");
        return;
    }

    const yourDevices = document.getElementById("createRoom");

    try {
        const response = await axios.get(`api`);
        const rooms = response.data;

        yourDevices.innerHTML = "";

        rooms.forEach((room) => {
            const roomElement = document.createElement("div");
            roomElement.className = "yourDevi";

            const devicesList = room.device
            .map(device => `<li>${device.devicename} - State: ${device.state ? "On" : "Off"}</li>`)
                .join("");

            roomElement.innerHTML = `
                <div class="card">
                    <h3>${room.roomname}</h3>
                    <ul>${devicesList}</ul>
                    <button onclick="handleRoom('${room.roomname}')">Edit Room</button>
                </div>
            `;

            yourDevices.appendChild(roomElement);
        });
    } catch (error) {
        console.error("Error fetching devices:", error);
        alert("An error occurred while fetching devices.");
    }
}

async function handleRoom(roomName) {
    localStorage.setItem("currentRoom", roomName);
    window.location.href = "../EditDevice/EditForm.html";
}
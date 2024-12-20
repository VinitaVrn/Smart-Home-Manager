document.getElementById("homePart").addEventListener("change", function () {
    const customRoom = document.getElementById("customRoomDiv");

    if (this.value === "custom") {
        customRoom.style.display = "block";
    } else {
        customRoom.style.display = "none";
    }
});

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

    const newRoom = roomName === "custom" ? customRoom : roomName;

    // Construct the devices object
    const devices = {};
    if (device1) devices.Lamps = device1;
    if (device2) devices.TV = device2;
    if (device3) devices.Fan = device3;
    if (device4) devices.Light = device4;
    if (device5) devices.RGBLight = device5;
    if (device6) devices.SwitchBoard = device6;

    // Get the username from localStorage
    const username = localStorage.getItem("username");

    if (!username) {
        alert("Username not found. Please log in again.");
        return;
    }

    // Prepare the room data
    const roomData = { username, newRoom, devices };

    try {
        const res = await axios.post("http://localhost:4000/room/add", roomData); // Replace with your API endpoint
        console.log(res.data);
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

document.getElementById("roomForm").addEventListener("submit", addRoom);

function Dashboard() {
    window.location.href = "../Dashboard.html";
}

// Fetch and display rooms and devices
const yourDevices = document.getElementById("createRoom");


// Fetch devices when the page loads
document.addEventListener("DOMContentLoaded", getDevices);
async function getDevices() {
    const username = localStorage.getItem("username");

    if (!username) {
        alert("Username not found. Please log in again.");
        return;
    }

    try {
        const response = await axios.get(`http://localhost:4000/${username}/room`);
        const devices = response.data;

        // Clear the existing devices before adding new ones
        yourDevices.innerHTML = "";

        devices.forEach((room, idx) => {
            const roomElement = document.createElement("div");
            roomElement.className = "yourDevi";

            roomElement.innerHTML = `
                <div class="card">
                    <button onclick="handleRoom('${room.newRoom}')">${room.newRoom}</button>
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






    // {
//     "username": "vinita",
//     "Room": {
    // [
    //     {
    //       "newRoom": "Living Room",
    //       "devices": {
    //         "Lamps": "Device_1_WiFi",
    //         "TV": "Device_2_WiFi"
    //       }
    //     },
    //     {
    //       "newRoom": "Kitchen",
    //       "devices": {
    //         "Fan": "Device_3_WiFi",
    //         "Light": "Device_4_WiFi"
    //       }
    //     }
    //   ]
    // }
// }
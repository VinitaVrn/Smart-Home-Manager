
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

  const devices = [];
  if (device1) if (device1) devices.push({devicename:device1});
  if (device2)  devices.push({devicename:device2});
  if (device3)  devices.push({devicename:device3});
  if (device4)  devices.push({devicename:device4});
  if (device5)  devices.push({devicename:device5});
  if (device6)  devices.push({devicename:device6});

  const username = localStorage.getItem("username");


  if (!username) {
    window.location.href = '../Authentication/Login.html';
      return;
  }

  const roomData = { "newRoom": newRoom, "Devices": devices };

  try {
      // Save room data under the user's username in Firebase
      const res = await axios.post(
          `https://v-smartz-default-rtdb.firebaseio.com/${username}/Room.json`,
          roomData
      );
      console.log("Response data:", res.data);
      alert("Room Added Successfully");
      document.getElementById("roomForm").reset();
      document.getElementById("customRoomDiv").style.display = "none";
  } catch (error) {
      console.error("Error adding room:", error);
      alert("An error occurred while adding the room.");
  }
}

document.getElementById("roomForm").addEventListener("submit", addRoom);

// Skip Button
function Dashboard() {
  window.location.href = "../Dashboard.html";
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


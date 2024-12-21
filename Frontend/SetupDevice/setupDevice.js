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

  const devices = {};
  if (device1) devices.Lamps = device1;
  if (device2) devices.TV = device2;
  if (device3) devices.Fan = device3;
  if (device4) devices.Light = device4;
  if (device5) devices.RGBLight = device5;
  if (device6) devices.SwitchBoard = device6;

  const username = localStorage.getItem("username");

  if (!username) {
    window.location.href = '../Authentication/Login';
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



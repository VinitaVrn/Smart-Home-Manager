document.getElementById("homePart").addEventListener("change", function () {
    const customRoom = document.getElementById("customRoomDiv");

    if (this.value === 'custom') {
        customRoom.style.display = 'block';
    } else {
        customRoom.style.display = 'none';
    }
})

async function addRoom(e){
    e.preventDefault()
    const roomName = document.getElementById("homePart").value
    const customRoom = document.getElementById("customRoom").value
    const device1 =  document.getElementById("device1").value
    const device2 =  document.getElementById("device2").value
    const device3 =  document.getElementById("device3").value
    const device4 =  document.getElementById("device4").value
    const device5 =  document.getElementById("device5").value
    const device6 =  document.getElementById("device6").value

   const newRoom = homePart === 'custom' ? customRoom :roomName ;
   const devices = { Lamps: device1,TV: device2, Fan: device3, Light: device4,RGBLight: device5,SwitchBoard: device6 }

   const roomData = {newRoom , devices}
try{
     let res = await axios.post(" Api need here" , roomData)   //Api Link Need here
     console.log(res.data)
     if(res.status == 200){
        alert("Room Added Successfully")
        document.getElementById("roomForm").reset()
        document.getElementById("customRoomDiv").style.display = "none";
     }else{
        alert("Failed to add room. Please try again.")
     }
}catch(error){
    console.error("Error adding room:", error);
    alert("An error occurred while adding the room.");
}
}

document.getElementById('roomForm').addEventListener('submit' , addRoom)
function Dashboard() {
    window.location.href = "../Dashboard.html";   // dashboard link need
}




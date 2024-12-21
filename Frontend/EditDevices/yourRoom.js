// async function YourRoom() {
//     const createRoom = document.getElementById("createRoom");
    
//     try {
//         const response = await axios.get("Api link need ");
//         const rooms = response.data;
        
//         createRoom.innerHTML = rooms.map((elem) => {
//             return `
//                 <div key="${elem.id}" class="yourRooms">
//                     <p>${elem.name}</p>
//                 </div>
//             `;
//         }).join('');
//     } catch (error) {
//         // console.error("Error fetching rooms:", error);
//         createRoom.innerHTML = "<p>Failed to load rooms. Please try again later.</p>";
//     }
// }

// YourRoom();











document.addEventListener("DOMContentLoaded", async () => {
    try {
        // Fetch data from the API
        const username = localStorage.getItem("username")
        const response = await axios.get( `https://v-smartz-default-rtdb.firebaseio.com/${username}.json` );
        const roomsData = response.data;
  
        if (!roomsData || Object.keys(roomsData).length === 0) {
            console.log("No rooms available.");
            return;
        }else{
   console.log("Rooms data received:", roomsData);
   document.getElementById("createRoom").innerHTML = 
    ` error in this code 
    
        //  ${Object.keys(roomsData).map(token => {
      //         const roomObj = roomsData[token].Room;
             
      //         if (roomObj && roomObj.newRoom) (
      //                 <div id="shoppingcart">
      //                     <button class="cart" onclick="HandleEdit('${roomObj.newRoom} ')">
      //                         ${roomObj.newRoom}
      //                     </button>
      //                 </div>
                  
      //   )  
      //     })
      //   } 
  
  
        `
      }
    } 
    catch (error) {
        console.error("An error occurred while fetching rooms data:", error);
    }
  });
  
  async function HandleEdit(roomName) {
    localStorage.setItem("currentRoom", roomName);
    window.location.href = "../EditDevice/EditForm.html";
  }
  
async function YourRoom() {
    const createRoom = document.getElementById("createRoom");
    const username = localStorage.getItem("username");

    try {
        const response = await axios.post("http://localhost:4000/roomNdevice/getroom");
        const rooms = response.data;
        
        createRoom.innerHTML = rooms.map((elem) => {
            return `
                <div key="${elem.id}" class="yourRooms">
                    <p>${elem.name}</p>
                </div>
            `;
        }).join('');
    } catch (error) {
        console.error("Error fetching rooms:", error);
        createRoom.innerHTML = "<p>Failed to load rooms. Please try again later.</p>";
    }
}

YourRoom();

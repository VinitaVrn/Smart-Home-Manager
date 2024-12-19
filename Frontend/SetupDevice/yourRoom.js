async function YourRoom() {
    const createRoom = document.getElementById("createRoom");
    
    try {
        const response = await axios.get("Api link need ");
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

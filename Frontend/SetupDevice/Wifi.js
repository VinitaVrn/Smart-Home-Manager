async function fetchWifiNetworks() {
    try {
      const response = await axios.get('');   // wifi Api Need
      const wifiNetworks = response.data;
  
      const wifiSelects = document.querySelectorAll("wifi");
  
      wifiSelects.forEach(select => {wifiNetworks.forEach(network => {const option = 
        document.createElement("option");
          option.value = network;
          option.textContent = network;
          select.appendChild(option);
        });
      });
    } catch (error) {
      console.error("Error fetching Wi-Fi networks:", error);
    }
  }
  
  window.onload = fetchWifiNetworks;
  
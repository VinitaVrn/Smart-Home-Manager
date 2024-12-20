function populateWifiNetworks() {
  const wifiNetworks = [
    "HomeNetwork_1",
    "OfficeWiFi",
    "CafeFreeWiFi",
    "PublicLibraryNet",
    "Guest_WiFi",
    "SecureNet_123"
  ];

  const wifiSelects = document.querySelectorAll("select.wifi");

  wifiSelects.forEach(select => {
    wifiNetworks.forEach(network => {
      const option = document.createElement("option");
      option.value = network;
      option.textContent = network;
      select.appendChild(option);
    });
  });
}

window.onload = populateWifiNetworks;

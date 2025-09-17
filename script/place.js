// Footer Year & Last Modified
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Weather Data (static for now)
const temperature = parseFloat(document.getElementById("temperature").textContent);
const windspeed = parseFloat(document.getElementById("windspeed").textContent);

// Calculate Wind Chill (Celsius)
function calculateWindChill(tempC, speedKmh) {
  return (
    13.12 +
    0.6215 * tempC -
    11.37 * Math.pow(speedKmh, 0.16) +
    0.3965 * tempC * Math.pow(speedKmh, 0.16)
  ).toFixed(1);
}

// Display Wind Chill only if conditions are valid
let windChillText = "N/A";
if (temperature <= 10 && windspeed > 4.8) {
  windChillText = calculateWindChill(temperature, windspeed) + " °C";
}

document.getElementById("windchill").textContent = windChillText;

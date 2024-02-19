async function getWeather() {
    const cityInput = document.getElementById("cityInput").value;
  
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=Replace_with_Api_key&units=metric`);
      const data = await response.json();
  
      const weatherInfo = document.getElementById("weatherInfo");
      weatherInfo.innerHTML = `
        <h2>Weather in ${data.name}</h2>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Description: ${data.weather[0].description}</p>
      `;
    } catch (error) {
      console.error("Error fetching weather data:", error);
      alert("Error fetching weather data. Please check API key and try again.");
    }
  }
  
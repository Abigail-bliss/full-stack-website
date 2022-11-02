
// "borrowed" from MDN's geolocation API example
function geoFindMe() {
    console.log("calling geofindme");
    const status = document.querySelector('#weatherStatus');
    
    function success(position) {
        let latitude = position.coords.latitude;
        let longitude = position.coords.longitude;
        const latitude_input = document.querySelector("#latitude-input");
        const longitude_input = document.querySelector("#longitude-input");

        longitude_input.value = longitude;
        latitude_input.value = latitude;
        console.log(`${latitude}, ${longitude}`);
        status.textContent = "";
    }
  
    function error() {
      status.textContent = 'Unable to retrieve your location';
    }
  
    if (!navigator.geolocation) {
      status.textContent = 'Geolocation is not supported by your browser';
    } else {
      status.textContent = 'Locating…';
      navigator.geolocation.getCurrentPosition(success, error);
    }
  
}

WEATHER_CODES = {
0:  'Clear sky',
1:  'Mainly clear',
2:  'Partly cloudy',
3:  'Overcast',
45: 'Fog',
48: 'Depositing Rime fog',
51: 'Light Drizzle',
53: 'Moderate Drizzle',
55: 'Dense Drizzle',
57: 'Light Freezing Drizzle',
57: 'Dense Freezing Drizzle',
61: 'Slight Rain',
63: 'Moderate Rain',
65: 'Heavy Rain',
66: 'Light Freezing Rain',
67: 'Heavy Freezing Rain',
71: 'Slight Snow fall',
73: 'Moderate Snow fall',
75: 'Heavy Snow fall',
77: 'Snow grains',
80: 'Slight Rain showers',
81: 'Moderate Rain showers',
82: 'Violent Rain showers',
85: 'Slight Snow showers slight and heavy',
86: 'Heavy Snow showers slight and heavy',
95: 'Thunderstorm',
96: 'Thunderstorm with slight hail',
99: 'Thunderstorm with heavy hail',
}

function getWeather() {
    let latitude = document.getElementById("latitude-input").value;
    let longitude = document.getElementById("longitude-input").value;
    let temp = document.getElementById("temp-display");
    let cloudiness = document.getElementById("cloud-cover-display");
    let sunrise = document.getElementById("sunrise-display");
    let sunset = document.getElementById("sunset-display");

    async function openMedioRequest(latitude, longitude){
      try{
        let url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&temperature_unit=fahrenheit&timezone=America%2FChicago`;
        let response = await fetch(url, {method: "GET"});
        let json = await response.json();
        console.log(json);
        temp.innerText = "The tempurature today is " + json.current_weather.temperature + " degrees farenheight!";
        cloudiness.innerText = "The forecast is " + WEATHER_CODES[json.current_weather.weathercode];
      } catch (error) {
        alert("Something went wrong with your Open Medio request:(");
      }
    }

    async function sunInfoRequest(latitude, longitude) {
      try{
        let url = `https://api.sunrise-sunset.org/json?lat=${latitude}&lng=${longitude}&date=today&formatted=0`;
        let response = await fetch(url, {method: "GET"});
        let json = await response.json();
        
        let sunriseDate = new Date(json.results.sunrise);
        sunriseDate.toLocaleTimeString;
        let sunriseTime = sunriseDate.getHours() + ":" + sunriseDate.getMinutes() + ":" + sunriseDate.getSeconds() + " AM";

        let sunsetDate = new Date(json.results.sunset);
        sunsetDate.toLocaleTimeString;
        let sunsetTime = (sunsetDate.getHours() - 12) + ":" + sunsetDate.getMinutes() + ":" + sunsetDate.getSeconds() + " PM";

        sunrise.innerText = "Sunrise: " + sunriseTime;
        sunset.innerText = "Sunset: " + sunsetTime;
      } catch (error) {
        alert("Something went wrong with your sunset-sunrise request:(");
      }
    }

    try {
      Promise.all([openMedioRequest(latitude, longitude), sunInfoRequest(latitude, longitude)]);
    } catch {
      alert("Something went wrong :(")
    }
}

document.querySelector('#find-me').addEventListener('click', geoFindMe);
document.querySelector("#get-weather-btn").addEventListener('click', getWeather);

import { geocoder } from "./geocode.js";
import { renderWeather } from "./renderWeather.js";
const form = document.querySelector('form');
const container = document.querySelector('.weather');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    container.innerHTML = "";
    let weather_section = document.createElement('div');
    container.appendChild(weather_section);
    weather_section.innerHTML = '<div class="weather-content"></div>';
    let weather_content = weather_section.querySelector(".weather-content");
    weather_content.innerHTML = "Loading...";

    let gps = null;
    gps = await geocoder(form.gps.value);
    renderWeather(`https://api.weather.gov/points/${gps}`, weather_content)
        .then(() => {
            let weather_details = weather_content.querySelector(".weather-details");
            weather_details.classList.add("show");
        })    
        .catch(err => {
            alert(err.message + '\nMake sure you entered a valid location');
            form.gps.value='';
        });
});
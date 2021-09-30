import { renderWeather } from "./renderWeather.js";
const container = document.querySelector('.weather');

window.addEventListener("DOMContentLoaded", () => {
    
    let weather_section = document.createElement('div');
    container.appendChild(weather_section);
    weather_section.innerHTML = '<div class="weather-content"></div>';
    let weather_content = weather_section.querySelector(".weather-content");
    weather_content.innerHTML = "Loading...";
    navigator.geolocation.getCurrentPosition(position => {
        let details = position.coords;
        let gps = details.latitude + ',' + details.longitude;
        renderWeather(`https://api.weather.gov/points/${gps}`, weather_content)
            .then(() => {
                let weather_details = weather_content.querySelector(".weather-details");
                 weather_details.classList.add("show");
            })
            .catch(err => alert(err.message));
            
    });

        
});




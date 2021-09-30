import { renderWeather } from "./renderWeather.js";

const container = document.querySelector('.weather');
const weatherLocations = ["38.0529,-81.104", "44.0341,-107.4512", "43.0041,-107.4512"];


window.addEventListener("DOMContentLoaded", () => {
    weatherLocations.forEach(gps => {
        let weather_section = document.createElement('div');
        
        container.appendChild(weather_section);
        weather_section.innerHTML = `
            <div class="weather-content"></div>
            <button class="button">see more...</button>
        `;

        let weather_content = weather_section.querySelector(".weather-content");
        renderWeather(`https://api.weather.gov/points/${gps}`, weather_content)
            .catch(err => alert(err.message));
        let button = weather_section.querySelector(".button");
        button.onclick = () => {
            let weather_details = weather_content.querySelector(".weather-details");
            weather_details.classList.toggle("show");
            if (button.innerHTML == "see more...") {
                button.innerHTML = "see less...";
            }
            else {
                button.innerHTML = "see more..."
            }
        };
    });
});

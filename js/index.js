import { renderWeather } from "./renderWeather.js";

const container = document.querySelector('.weather');
const weatherLocations = ["38.0529,-81.104", "44.0341,-107.4512", "43.0041,-107.4512"];

window.addEventListener("DOMContentLoaded", () => {
    weatherLocations.forEach(gps => {
        renderWeather(`https://api.weather.gov/points/${gps}`, container)
    .catch(err => alert(err.message));
    })
    });




import { renderWeather } from "./renderWeather.js";

const container = document.querySelector('.weather');
const fayettevilleBtn = document.querySelector('#fayettevilleBtn');
const tenSleepBtn = document.querySelector('#tenSleepBtn');

window.addEventListener("DOMContentLoaded", () => 
    renderWeather("https://api.weather.gov/points/38.0529,-81.104", container)
    .catch(err => alert(err.message))
    );

fayettevilleBtn.addEventListener('click', () => 
    renderWeather("https://api.weather.gov/points/38.0529,-81.104", container)
    .catch(err => alert(err.message))
    );

tenSleepBtn.addEventListener('click', () => 
    renderWeather("https://api.weather.gov/points/44.0341,-107.4512", container)
    .catch(err => alert(err.message))
    );



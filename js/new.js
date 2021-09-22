import { renderWeather } from "./renderWeather.js";
const form = document.querySelector('form');
const container = document.querySelector('.weather');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    container.innerHTML = "<p>Loading...</p>";
    renderWeather(`https://api.weather.gov/points/${form.gps.value}`, container)
        .catch(err => {
            alert(err.message + '\nMake sure you entered valid GPS coordinates');
            form.gps.value='';
        });
});
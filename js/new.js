import { geocoder } from "./geocode.js";
import { renderWeather } from "./renderWeather.js";
const form = document.querySelector('form');
const container = document.querySelector('.weather');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    container.innerHTML = "<p>Loading...</p>";
    let gps = null;
    gps = await geocoder(form.gps.value);
    console.log(gps);
    renderWeather(`https://api.weather.gov/points/${gps}`, container)
        .catch(err => {
            alert(err.message + '\nMake sure you entered a valid location');
            form.gps.value='';
        });
});
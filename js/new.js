import { geocoder } from "./geocode.js";
import { renderWeather } from "./renderWeather.js";
const form = document.querySelector('form');
const container = document.querySelector('.weather');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    container.innerHTML = "<p>Loading...</p>";
    console.log("test");
    const gps = geocoder(form.gps.value);
    console.log(gps);
    // renderWeather(`https://api.weather.gov/points/${gps}`, container)
    //     .catch(err => {
    //         alert(err.message + '\nMake sure you entered valid GPS coordinates');
    //         form.gps.value='';
    //     });
});
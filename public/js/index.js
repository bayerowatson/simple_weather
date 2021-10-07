import { geocoder } from "./geocode.js";
import { renderWeather } from "./renderWeather.js";
const form = document.querySelector('form');
const container = document.querySelector('.weather');
const barrowBtn = document.querySelector('.barrowBtn');
const hanaBtn = document.querySelector('.hanaBtn');
const leadvilleBtn = document.querySelector('.leadvilleBtn');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    container.innerHTML = "";
    let weather_section = document.createElement('div');
    container.appendChild(weather_section);
    weather_section.innerHTML = '<div class="weather-content"></div>';
    let weather_content = weather_section.querySelector(".weather-content");
    weather_content.innerHTML = "Loading...";

    let gps = null;
    gps = await geocoder(form.location.value);
    renderWeather(`https://api.weather.gov/points/${gps}`, weather_content)
        .then(() => {
            let weather_details = weather_content.querySelector(".weather-details");
            weather_details.classList.add("show");
        })    
        .catch(err => {
            alert(err.message + '\nMake sure you entered a valid US location (e.g. Fayetteville, WV)');
            form.location.value='';
            weather_content.innerHTML = "<p class='display-5'>Oops... Something went wrong. Please try again...</p>"
        });
});

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
            .catch(err => alert(err.message));
            
    }, err => {
        alert("We couldn't access your device's location: " + err.message + "\nHere is the weather for the geographic center of the US instead...");
        let weather_content = container.querySelector(".weather-content");
        weather_content.innerHTML = "Loading...";
        renderWeather(`https://api.weather.gov/points/44.6714,-103.8521`, weather_content)
            .catch(err => alert(err.message));
    });       
});

barrowBtn.addEventListener("click", () => {
    let weather_content = container.querySelector(".weather-content");
    weather_content.innerHTML = "Loading...";
    renderWeather(`https://api.weather.gov/points/71.2906,-156.7887`, weather_content)
            .catch(err => alert(err.message));
})

hanaBtn.addEventListener("click", () => {
    let weather_content = container.querySelector(".weather-content");
    weather_content.innerHTML = "Loading...";
    renderWeather(`https://api.weather.gov/points/20.7575,-155.9884`, weather_content)
            .catch(err => alert(err.message));
})

leadvilleBtn.addEventListener("click", () => {
    let weather_content = container.querySelector(".weather-content");
    weather_content.innerHTML = "Loading...";
    renderWeather(`https://api.weather.gov/points/39.2508,-106.2925`, weather_content)
            .catch(err => alert(err.message));
})

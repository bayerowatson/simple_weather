import { findIcon, findFillIcon } from "./findIcon.js";

const renderWeather = async (url, container) => {
    container.innerHTML = "Loading..."
    const response = await fetch(url);
    if (response.status !== 200) {
        throw new Error('Something went wrong...')
    }
    const data = await response.json();
    const hourlyUrl = data.properties.forecastHourly;
    const hourlyResponse = await fetch(hourlyUrl);
    const hourlyData = await hourlyResponse.json();
    const currentTemp = hourlyData.properties.periods[0].temperature;
    const forecastUrl = data.properties.forecast;
    const location = `${data.properties.relativeLocation.properties.city}, ${data.properties.relativeLocation.properties.state}`;
    const detailsResponse = await fetch(forecastUrl);
    const detailsData = await detailsResponse.json();
    const forecast_periods = detailsData.properties.periods;
    let header = `
        <div class="weather-header">    
            <h2 class='display-6'>${location}</h2>
            <p class='text-primary fs-3 mb-1'>${findFillIcon(forecast_periods[0].shortForecast)}  ${currentTemp}&#176;F</p>
            <p class="fs-5 text-primary">${forecast_periods[0].shortForecast}</p>
            
        </div>`;
    let template = '';
    let lowTemp = '';
    forecast_periods.forEach( (period, i) => {
        if (period.isDaytime || period.name == "Overnight") {
            if (period.name != "Overnight" && i < 13) {
                lowTemp = forecast_periods[i+1].temperature
            }
            template +=
            `<div class="accordion-item>
                <div class='accordion-header' id=${period.name.split(' ').join('')}>
                    <button class='accordion-button' type="button" data-bs-toggle="collapse" data-bs-target=${'#collapse'+period.name.split(' ').join('')} aria-expanded="false" aria-controls=${'collapse'+period.name.split(' ').join('')}>
                        <div class='fs-3 mb-3 pb-2 d-flex justify-content-between border-bottom'>
                            <span>${period.name} :</span>  <span>${findIcon(period.shortForecast)} ${period.temperature}&#176;F<span class='fs-5 text-secondary'>${lowTemp && '/'+lowTemp+'&#176;F'}</span></span>
                        </div>
                    </button>
                </div>
                <div id=${'collapse'+period.name.split(' ').join('')} class="accordion-collapse collapse" aria-labelledby=${period.name.split(' ').join('')}>
                    <div class='accordion-body'>
                        <p class="fs-6">${period.detailedForecast}</p>
                    </div>
                </div>
            </div>`
        }
    
    })
     
    container.innerHTML = `
        ${header}
        <div class="weather-details accordion" id=${location.split(' ').join('')}>
            ${template}
        </div>`;     
}

export {renderWeather};
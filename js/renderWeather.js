const renderWeather = async(url, container) => {
    container.firstElementChild.innerHTML = "<p>Loading...</p>";
    const response = await fetch(url);
    if (response.status !== 200) {
        throw new Error('Something went wrong...')
    }
    const data = await response.json();
    const forecastUrl = (data.properties.forecast)
    const location = `${data.properties.relativeLocation.properties.city}, ${data.properties.relativeLocation.properties.state}`;
    const detailsResponse = await fetch(forecastUrl);
    const detailsData = await detailsResponse.json();
    const forecast_periods = detailsData.properties.periods;
    let header = `
        <div class="weather-header">    <h2>${location}</h2>
            <button>see more... </button>
        </div>`;
    let template = '';
    let color = '';
    forecast_periods.forEach( period => {
        if (period.temperature > 80) {color = 'red';} 
        else if (period.temperature > 64) {color = 'navy';}
        else {color = 'green'};
    
        template +=
        `<div>
            <h3>${period.name}</h3>
            <p style="color:${color}">${period.detailedForecast}</p>
        </div>`
    })
    container.firstElementChild.innerHTML = "<p></p>";    
    container.innerHTML += `
        ${header}
        <div class="weather-details" id=${location.split(' ').join('')}>
            ${template}
        </div>`;
    
}

export {renderWeather};
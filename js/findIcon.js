const findIcon = (forecast) => {
    if (forecast.includes('Thunderstorm')){
        return('<i style="font-size:30px" class="bi bi-cloud-lightning-rain-fill"></i>')
    }
    if (forecast.includes('Rain') || forecast.includes('Shower')){
        return('<i style="font-size:30px" class="bi bi-cloud-rain-fill"></i>')
    }
    if (forecast.includes('Partly')){
        return('<i style="font-size:30px" class="bi bi-cloud-sun-fill"></i>')
    }
    if (forecast.includes('Sun')){
        return('<i style="font-size:30px" class="bi bi-sun-fill"></i>')
    }
    if (forecast.includes('Cloud')){
        return('<i style="font-size:30px" class="bi bi-clouds-fill"></i>')
    }
    if (forecast.includes('Snow') || forecast.includes('Freez')){
        return('<i style="font-size:30px" class="bi bi-snow2"></i>')
    }
    
    return('<p>'+forecast+'</p>')
}


export {findIcon}
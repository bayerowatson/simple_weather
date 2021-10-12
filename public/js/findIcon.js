const findIcon = (forecast) => {
    if (forecast.includes('Rain') && (forecast.includes('Snow') || forecast.includes('Freez'))){
        return('<i style="font-size:30px" class="bi bi-cloud-rain"></i>/<i style="font-size:30px" class="bi bi-snow"></i>')
    }
    if (forecast.includes('Thunderstorm')){
        return('<i style="font-size:30px" class="bi bi-cloud-lightning-rain"></i>')
    }
    if (forecast.includes('Rain') || forecast.includes('Shower')){
        return('<i style="font-size:30px" class="bi bi-cloud-rain"></i>')
    }
    if (forecast.includes('Fog')){
        return('<i style="font-size:30px" class="bi bi-cloud-fog"></i>')
    }
    if (forecast.includes('Partly')){
        return('<i style="font-size:30px" class="bi bi-cloud-sun"></i>')
    }
    if (forecast.includes('Sun')){
        return('<i style="font-size:30px" class="bi bi-sun"></i>')
    }
    if (forecast.includes('Cloud')){
        return('<i style="font-size:30px" class="bi bi-clouds"></i>')
    }
    if (forecast.includes('Snow') || forecast.includes('Freez')){
        return('<i style="font-size:30px" class="bi bi-snow"></i>')
    }
    if (forecast.includes('Clear')){
        return('<i style="font-size:30px" class="bi bi-moon-stars"></i>')
    }
    
    
    return('<p>'+forecast+'</p>')
}

const findFillIcon = (forecast) => {
    if (forecast.includes('Rain') && (forecast.includes('Snow') || forecast.includes('Freez'))){
        return('<i style="font-size:30px" class="bi bi-cloud-rain-fill"></i>/<i style="font-size:30px" class="bi bi-snow-fill"></i>')
    }
    if (forecast.includes('Thunderstorm')){
        return('<i style="font-size:30px" class="bi bi-cloud-lightning-rain-fill"></i>')
    }
    if (forecast.includes('Fog')){
        return('<i style="font-size:30px" class="bi bi-cloud-fog-fill"></i>')
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
    if (forecast.includes('Clear')){
        return('<i style="font-size:30px" class="bi bi-moon-stars-fill"></i>')
    }
    return('<p>'+forecast+'</p>')
}


export {findIcon, findFillIcon}
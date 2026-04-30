const key = 'd49f93255552fc1f1700f4dfd9f1c6ee'

//Update all data on screen
function screenData(data) {
    const cityData = document.querySelector('.city')
    const tempData = document.querySelector('.temp')
    const weatherData = document.querySelector('.radar-weather')
    const humidity = document.querySelector('.humidity')
    const weatherImage = document.querySelector('.weather-image')

    cityData.innerHTML = `Weather in ${data.name}`
    tempData.innerHTML = Math.floor(data.main.temp) + '°C'
    weatherData.innerHTML = data.weather[0].description
    humidity.innerHTML = `Humidity:  ${data.main.humidity}%`
    weatherImage.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
}

//Search by name
async function searchCity(city){
    const city_info = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=en&units=metric`).then( response => response.json())
    screenData(city_info)
}

//Search by coords
async function searchByCoords(lat, lon) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&lang=pt_br&units=metric`)
    const data = await response.json()
    screenData(data)
}

//When click
function click_btn(){
    const city = document.querySelector('.city-input').value
    searchCity(city)
}


//Search a city location when load
window.onload = () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            searchByCoords(position.coords.latitude, position.coords.longitude)
        }, () => {
            searchCity("Tokyo")
        })
    } else {
        searchCity("Tokyo")
    }
}
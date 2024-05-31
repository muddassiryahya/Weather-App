const apiKey = "b2aa6e3da708074db78a70926ee8d9d2";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";




async function checkWeather() {
    const searchBox = document.querySelector(".search input");
    const city = searchBox.value;
    const weatherIcon = document.querySelector(".weather-icon");



    const response = await fetch(apiUrl + `&q=${city}` + `&appid=${apiKey}`);
    var data = await response.json();


    if (data.cod == 404){
        document.querySelector(".error").style.display = "block";
    } 
    else {
        document.querySelector(".error").style.display = "none";
    }

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if (data.weather[0].main == "Clouds") {
        weatherIcon.src = "images/clouds.png"
    }
    else if (data.weather[0].main == "Clear" || "Haze") {
        weatherIcon.src = "images/clear.png"
    }
    else if (data.weather[0].main == "Drizzle") {
        weatherIcon.src = "images/drizzle.png"
    }
    else if (data.weather[0].main == "Mist") {
        weatherIcon.src = "images/mist.png"
    }
    else if (data.weather[0].main == "Rain") {
        weatherIcon.src = "images/rain.png"
    }
    else if (data.weather[0].main == "Snow") {
        weatherIcon.src = "images/snow.png"
    }

    // document.querySelector(".weather").style.display = "block";

}
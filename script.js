const apikey = "2aeda91f3920078248485afc87674253";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");

const weathericon = document.querySelector(".Weather_icon");






async function checkweather(city) {
    const response = await fetch(apiurl + city + `&appid=${apikey}`);
    var data = await response.json();
//    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".hum").innerHTML = data.main.humidity + "%";
    document.querySelector(".air").innerHTML = data.wind.speed + " " + "km/h";

    if (data.weather[0].main == "Clouds") {
        weathericon.src = "images/clouds.png";
    }
    if (data.weather[0].main == "Clear") {
        weathericon.src = "images/clear.png";
    }
    if (data.weather[0].main == "Rain") {
        weathericon.src = "images/rain.png";
    }
    if (data.weather[0].main == "Drizzle") {
        weathericon.src = "images/drizzle.png";
    }
    if (data.weather[0].main == "Mist") {
        weathericon.src = "images/mist.png";
    }
    if (data.weather[0].main == "Snow") {
        weathericon.src = "images/snow.png";
    }




}


searchbtn.addEventListener("click", () => {
    checkweather(searchbox.value);
});

let weather = {
    "apiKey": "250b9ef6e3c29daab940a00697d31f15",
    // "apiKey": "886705b4c1182eb1c69f28eb8c520e20",
    fetchWeather: function (city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="
            + city +"&units=metric&appid=" + this.apiKey
        )
            .then((response) => response.json())
            .then((data) => this.displayWeather(data));
    },
    displayWeather: function (data) {
        // console.log(data);
        const { name } = data;
        const { description, icon } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        // console.log(name, icon, description, temp, humidity, speed);
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "℃";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind speed: " + speed + "km/h";
        document.querySelector(".weather").classList.remove("loading");
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + name + "')"
    },
    search: function () {
        this.fetchWeather(document.querySelector(".search-bar").value);
    },

};

document.querySelector(".search button").addEventListener("click", function () {
    weather.search();
})

document.querySelector(".search-bar").addEventListener("keyup", function (event) {
    if (event.key == 'Enter') {
        weather.search();
    }
})

weather.fetchWeather("London")
// https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=886705b4c1182eb1c69f28eb8c520e20

// {"coord":{"lon":-0.1257,"lat":51.5085},
//     "weather":
//     [{"id":804,
//       "main":"Clouds",
//       "description":"overcast clouds",
//       "icon":"04n"}],
//     "base":"stations",
//     "main":{"temp":15.69,"feels_like":15.01,"temp_min":13.21,"temp_max":17.27,"pressure":1015,"humidity":65},
//     "visibility":10000,
//     "wind":{"speed":3.18,"deg":188,"gust":6.12},
//     "clouds":{"all":100},
//     "dt":1688680829,
//     "sys":{"type":2,"id":2075535,"country":"GB","sunrise":1688615462,"sunset":1688674737},
//     "timezone":3600,"id":2643743,"name":"London","cod":200}
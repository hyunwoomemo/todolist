const API_KEY = "67d2af0194723966734128ec76b9a40d";
const weatherSection = document.querySelector(".weatheron");
const weatherOnBtn = document.createElement("button");
const weatherOffBtn = document.createElement("button");
const weather = document.querySelector(".weatheron span:last-child");
const city = document.querySelector(".weatheron span:first-child");

weatherOnBtn.innerText = "⛅"
weatherOffBtn.innerText = "🌜"
weatherOffBtn.classList.add("hidden");
weatherSection.appendChild(weatherOnBtn);
weatherSection.appendChild(weatherOffBtn);

function handleWeatherOnBtn(position) {
    weather.classList.remove("hidden");
    city.classList.remove("hidden");
    weatherOnBtn.classList.add("hidden");
    weatherOffBtn.classList.remove("hidden");
}

function handleWeatherOffBtn(position) {
    weather.classList.add("hidden");
    city.classList.add("hidden");
    weatherOnBtn.classList.remove("hidden");
    weatherOffBtn.classList.add("hidden");
}

weatherOnBtn.addEventListener("click", handleWeatherOnBtn)
weatherOffBtn.addEventListener("click", handleWeatherOffBtn)

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        const weather = document.querySelector(".weatheron span:last-child");
        const city = document.querySelector(".weatheron span:first-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}   

function onGeoError() {
    alert("Can't find you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

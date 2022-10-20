let timeElement = document.querySelector("#currentTime");
let date = new Date();
let dayIndex = date.getDay();
let hour = date.getHours();
if (hour < 10) {
  hour = `0${hour}`;
}
let minute = date.getMinutes();
if (minute < 10) {
  minute = `0${minute}`;
}
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

timeElement.innerHTML = `${days[dayIndex]} ${hour}:${minute}`;

function displayWeatherConditions(response) {
  document.querySelector("#city").innerHTML = response.data.name;
}

function showTemp(response) {
  let currentTemp = Math.round(response.data.main.temp);
  document.querySelector("#temperature").innerHTML = `${currentTemp}°F 😎`;
}

function searchCity(city) {
  event.preventDefault();
  let apiKey = "a5acb752426cd8188485c35694980e3a";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(displayWeatherConditions);
}

function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#city-input").value;
  searchCity(city);
}

function searchLocation(position) {
  let apiKey = "a5acb752426cd8188485c35694980e3a";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeatherConditions);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", handleSubmit);

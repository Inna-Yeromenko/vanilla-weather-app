function displayTemperature(response) {
  console.log(response.data);
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
  descriptionElement.innerHTML = response.data.weather[0].description;
  humidityElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);
}

let apiKey = "4663038e04d78ab3c84fecc9672ffe2a";
let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=Kharkiv,ua&APPID=4663038e04d78ab3c84fecc9672ffe2a&units=metric`;

axios.get(apiUrl).then(displayTemperature);

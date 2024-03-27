function showTemperature(response) {
  let temperature = document.querySelector("#temperature");
  let humidity = document.querySelector("#Humidity");
  let windSpeed = document.querySelector("#windspeed");
  let description = document.querySelector("#condition");
  console.log(response.data);

  let currentTemperature = response.data.temperature.current;
  temperature.innerHTML = Math.round(currentTemperature);

  let currentHumidity = response.data.temperature.humidity;
  humidity.innerHTML = `${currentHumidity}%`;

  let currentWindSpeed = response.data.wind.speed;
  windSpeed.innerHTML = `${currentWindSpeed}km/h`;
  description.innerHTML = response.data.condition.description;
}

function updatedCity(city) {
  let apiKey = "d34702155fe628t713faof5f645213cb";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemperature);
}

function searchBox(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");
  let currentCity = document.querySelector("#city");
  currentCity.innerHTML = searchInput.value;
  updatedCity(searchInput.value);
}

let cityForm = document.querySelector("#search-form");
cityForm.addEventListener("submit", searchBox);

updatedCity("paris");

function showTemperature(response) {
  let temperature = document.querySelector("#temperature");
  let currentTemperature = response.data.temperature.current;
  temperature.innerHTML = Math.round(currentTemperature);
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

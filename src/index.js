let apiKey = "d34702155fe628t713faof5f645213cb";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query= ${city}&key= ${apiKey}`;

function searchBox(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");
  let currentCity = document.querySelector("#city");
  currentCity.innerHTML = searchInput.value;
}

let cityForm = document.querySelector("#search-form");
cityForm.addEventListener("submit", searchBox);

function showTemperature(response) {
  let city = response.data.ciy;
  console.log(city);
}

axios.get(apiUrl).then(showTemperature);

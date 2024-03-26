function searchBox(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");
  let currentCity = document.querySelector("#city");
  currentCity.innerHTML = searchInput.value;
}

let cityForm = document.querySelector("#search-form");
cityForm.addEventListener("submit", searchBox);

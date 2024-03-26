function city(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");
}
console.log(searchInput).value;

let updatedCityInput = document.querySelector("#search-form");
updatedCityInput.addEventListener("submit", city);

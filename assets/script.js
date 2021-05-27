var userFormEl = document.querySelector('user-form');
var cityInputEL = document.querySelector('#chosenCity');
var weatherContainerEl = document.querySelector('#current-container');
var citySearchTerm = document.querySelector('#city-search-term');




var APIKey = "15b34d0fc836d151fe66ac24becbe084";
var city = cityInputEL.value.trim();
var currentURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;
var fiveDayURL = 'api.openweathermap.org/data/2.5/forecast?q=' + city + '&appid=' + APIKey;
var oneCallURL = 'https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid=' + APIKey;
//Need to pull lat and long data from other API and input into oneCall to get its data ^





var formSubmitHandler = function (event) {
  event.preventDefault();

  if (city) {
    getCityWeather(city);

    weatherContainerEl.textContent = "";
  }
};

var getCityWeather = function (city) {

  fetch(queryURL)
  .then(function (response) {
    if (response.ok) {
      console.log(response);
      response.json()
      .then(function (data) {
        console.log(data);

      }
      )
    }
  }
  
  
  )
}

var displayWeather = function (weatherData, searchTerm) {
  if (weatherData.length === 0) {
    weatherContainerEl.textContent = 'No data found';
    return;
  }
  citySearchTerm.textContent = searchTerm;
}


//searchFormEl.addEventListener('submit', formSubmitHandler);
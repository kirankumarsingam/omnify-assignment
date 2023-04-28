
let displayTemparatureEl = document.getElementById("displayTemparature");

let displayClimateEl = document.getElementById("displayClimate");

let displayHumidityEl = document.getElementById("displayHumidity");

let notFoundLocationEl = document.getElementById("notFoundLocation");

let weatherContainerEl = document.getElementById("weatherContainer");

let climateConditionImagesEl = document.getElementById("climateConditionImages");

function button() {
    let searchValueEl = document.getElementById("searchValue");
    let searchInput = searchValueEl.value;
    searchValueEl.value = "";
    getCityWeather(searchInput);
}

function getCityWeather(cityName) {
     
    
    let url = "http://localhost:3000/weather/" + cityName;
    let options = {
        method: "GET"
    };
    fetch(url, options)
        .then(function(response) {
            return response.json();
            
        })
        .then(function(cityWeather) {
            displayCityWeather(cityWeather);
        });
}

function displayCityWeather(cityWeather) {
    console.log(cityWeather);
 const { temparature, humidity, climateCondition} = cityWeather;
 if (!temparature) {
    notFoundLocationEl.style.display = "block";
    weatherContainerEl.style.display = "none";
 }
 else {
    notFoundLocationEl.style.display = "none";
    weatherContainerEl.style.display = "block";
    displayTemparatureEl.textContent = temparature;
    displayClimateEl.textContent = climateCondition;
    displayHumidityEl.textContent = humidity;
    if (climateCondition === "Rain") {
        climateConditionImagesEl.setAttribute("src", "./img/rainy.png");
    }
    else if (climateCondition === "Hot") {
        climateConditionImagesEl.setAttribute("src", "./img/sunny.jpg");
    }
    else {
        climateConditionImagesEl.setAttribute("src", "./img/cloudy.png");
    }
 }
 
}
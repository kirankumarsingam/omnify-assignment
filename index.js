
var express = require("express");
var ejs = require("ejs");
var app = express();
const cityWeathers = {
    "hyderabad" : {"temparature": "40℃", "humidity" : "28%", "climateCondition" : "Hot"},
    "chennai" : {"temparature": "28℃", "humidity" : "38%", "climateCondition" : "Cloud"},
    "mumbai" : {"temparature": "10℃", "humidity" : "33%", "climateCondition" : "Rain"},
    "kolkata" : {"temparature": "45℃", "humidity" : "35%", "climateCondition" : "Hot"},
    "lucknow" : {"temparature": "21℃", "humidity" : "28%", "climateCondition" : "cloud"},
    "patna" : {"temparature": "17℃", "humidity" : "25%", "climateCondition" : "Rain"},
    "bhopal" : {"temparature": "46℃", "humidity" : "20%", "climateCondition" : "Hot"},
    "panaji" : {"temparature": "14℃", "humidity" : "41%", "climateCondition" : "Cloud"},
    "shimla" : {"temparature": "8℃", "humidity" : "33%", "climateCondition" : "Rain"},
    "jaipur" : {"temparature": "32℃", "humidity" : "35%", "climateCondition" : "Hot"},
    "ammaravati" : {"temparature": "13℃", "humidity" : "23%", "climateCondition" : "Cloud"},
    "kerala" : {"temparature": "19℃", "humidity" : "22%", "climateCondition" : "Rain"},
    "gujarat" : {"temparature": "39℃", "humidity" : "18%", "climateCondition" : "Hot"},
    "raipur" : {"temparature": "28℃", "humidity" : "30%", "climateCondition" : "Cloud"},
    "dispur" : {"temparature": "18℃", "humidity" : "35%", "climateCondition" : "Rain"},
    "manipur" : {"temparature": "44℃", "humidity" : "21%", "climateCondition" : "Hot"},
    "delhi" : {"temparature": "27℃", "humidity" : "27%", "climateCondition" : "Cloud"},
    "goa" : {"temparature": "16℃", "humidity" : "38%", "climateCondition" : "Rain"},
    "maharashtra" : {"temparature": "43℃", "humidity" : "19%", "climateCondition" : "Hot"},
    "karnataka" : {"temparature": "25℃", "humidity" : "24%", "climateCondition" : "Cloud"},
    "telangana" : {"temparature": "11℃", "humidity" : "26%", "climateCondition" : "Rain"},
    "andrapradesh" : {"temparature": "37℃", "humidity" : "36%", "climateCondition" : "Hot"},
    "punjab" : {"temparature": "23.5℃", "humidity" : "42%", "climateCondition" : "Cloud"},
    "uttarpradesh" : {"temparature": "15.25℃", "humidity" : "40%", "climateCondition" : "Rain"},
    "tripura" : {"temparature": "33.85℃", "humidity" : "41%", "climateCondition" : "Hot"},
    "bihar" : {"temparature": "28.5℃", "humidity" : "30%", "climateCondition" : "Cloud"},
    "varanasi" : {"temparature": "14.05℃", "humidity" : "31%", "climateCondition" : "Rain"},
    "agra" : {"temparature": "35.8℃", "humidity" : "34%", "climateCondition" : "Hot"},
    "mysuru" : {"temparature": "22.65℃", "humidity" : "36%", "climateCondition" : "Cloud"},
    "pune" : {"temparature": "12.05℃", "humidity" : "30%", "climateCondition" : "Rain"},
    "surat" : {"temparature": "31.2℃", "humidity" : "28%", "climateCondition" : "Hot"},
    "udaipur" : {"temparature": "25.5℃", "humidity" : "29%", "climateCondition" : "Cloud"},
    "vadodara" : {"temparature": "9.5℃", "humidity" : "24%", "climateCondition" : "Rain"},
    "mangaluru" : {"temparature": "44.5℃", "humidity" : "20%", "climateCondition" : "Hot"},
    "bhubaneswar" : {"temparature": "20.25℃", "humidity" : "24%", "climateCondition" : "Cloud"},
}

app.use(express.static("public"));
app.set ('view engine', 'ejs');

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000/");
});

app.get("/", function(request, response)  {

    response.render('pages/index');
})

app.get("/weather/:cityName", function(request,response) {
    const {cityName} = request.params;
    let cityWeather = cityWeathers[cityName];
    if (!cityWeather) {
         cityWeather = {"temparature": "", "humidity" : "", "climateCondition" : ""};
    }
    response.send(cityWeather);
})

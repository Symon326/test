const XMLHttpRequest = require('xhr2')
var s = new XMLHttpRequest();
s.open("GET","https://restcountries.com/v3.1/all", true)
s.onload = function () {
    var countries = JSON.parse(s.responseText);
    var totalPopulation = countries.reduce((total, country) => {
        return total + country.population;
    }, 0);
    console.log("Total population of all countries:", totalPopulation);
}
    s.send();
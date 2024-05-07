const XMLHttpRequest = require('xhr2')
var s = new XMLHttpRequest();
s.open("GET","https://restcountries.com/v3.1/all", true)
s.onload = function () {
    var countries = JSON.parse(s.responseText);
    var dollarCountries = countries.filter(country => {
        return country.currencies && Object.keys(country.currencies).includes("USD");
    });
    console.log("Countries used dollar currenci");
    dollarCountries.forEach(country => {
        console.log(country.name.common);
    });
}
    s.send();
const XMLHttpRequest = require('xhr2')
var s = new XMLHttpRequest();
s.open("GET","https://restcountries.com/v3.1/all", true)
s.onload = function () {
    var countries = JSON.parse(s.responseText);
    var asiaCountries = countries.filter(country => country.region === 'Asia');
    asiaCountries.forEach((country) => {
        console.log(country.name.common + ": " + country.flag);
    });
}
    s.send();
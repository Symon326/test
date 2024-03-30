const XMLHttpRequest = require('xhr2')
var s = new XMLHttpRequest();
console.log("hello")
s.open("GET","https://restcountries.com/v3.1/all", true)
s.onload = function () {
    var countries = JSON.parse(s.responseText);
    countries.forEach((country) => {
        console.log("country : " + country.name.common)
        console.log("Region : " + country.name.official)
    });
};
s.send();
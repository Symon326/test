document.addEventListener("DOMContentLoaded", () => {
    // Function to fetch country data
    function fetchCountryData() {
        return fetch('https://restcountries.com/v3.1/all')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .catch(error => {
                console.error('Error fetching country data:', error);
            });
    }

    // Function to fetch weather data for a city
    function fetchWeatherData(cityName) {
        return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(weatherData => {
                return weatherData.weather[0].description;
            })
            .catch(error => {
                console.error('Error fetching weather data:', error);
            });
    }

    // Function to create a card for a country with weather data
    function createCountryCard(country, weatherDescription) {
        const { name, flags, region, population } = country;

        // Create card element
        const card = document.createElement('div');
        card.classList.add('col-sm-6', 'col-md-4', 'col-lg-4', 'col-xl-4', 'mb-4');

        // Create card components
        const cardContent = `
            <div class="card h-100">
                <img src="${flags.svg}" class="card-img-top" alt="${name.common} Flag">
                <div class="card-header">
                    ${name.common}
                </div>
                <div class="card-body">
                    <div class="card-text">
                        <p>Region: ${region}</p>
                        <p>Population: ${population}</p>
                        <button onclick="fetchWeatherData(cityName)">Click For Wheather</button>
                    </div>
                </div>
            </div>
        `;

        // Set card content
        card.innerHTML = cardContent;

        return card;
    }

    // Get the container where cards will be appended
    const cardsContainer = document.querySelector('.row');

    fetchCountryData()
        .then(countryData => {
            countryData.forEach(country => {
                const cityName = country.capital[0]; // Use the first capital city if there are multiple
                fetchWeatherData(cityName)
                    .then(weatherDescription => {
                        const card = createCountryCard(country, weatherDescription);
                        cardsContainer.appendChild(card);
                    });
            });
        })
        .catch(error => {
            console.error('Error fetching country data:', error);
        });
});

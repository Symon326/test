// script.js
document.addEventListener('DOMContentLoaded', function () {
    // Function to fetch data from an API using Fetch API and Promises
    function fetchData(url) {
      return fetch(url)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .catch(error => {
          console.error('There was a problem with the fetch operation:', error);
        });
    }
  
    // URLs of the APIs
    const apiUrls = [
      'https://api.artic.edu/api/v1/artworks/search?q=cats',
      'https://www.colourlovers.com/api/colors/new?format=json',
      'https://api.apis.guru/v2/list.json'
    ];
  
    // Function to display data on the webpage
    function displayData(data) {
      const container = document.getElementById('data-container');
      data.forEach(item => {
        const card = document.createElement('div');
        card.classList.add('col-md-4');
  
        const cardContent = `
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">${item.title}</h5>
              <p class="card-text">${item.description}</p>
            </div>
          </div>
        `;
        card.innerHTML = cardContent;
        container.appendChild(card);
      });
    }
  
    // Fetch data from each API and display it
    apiUrls.forEach(url => {
      fetchData(url)
        .then(data => {
          displayData(data);
        });
    });
  });
  
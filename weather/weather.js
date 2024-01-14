document.addEventListener('DOMContentLoaded', function() {
    const apiKey = 'fdfe2bde2c11551cce7516855d747f7a';
    const cityInput = document.querySelector('.cityInput');
    const getWeatherBtn = document.querySelector('.btn');
    const weatherInfoElement = document.getElementById('weatherInfo');

    getWeatherBtn.addEventListener('click', (event) => {
        event.preventDefault();

        const city = cityInput.value;

        if (city !== '') {
            const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

            fetch(apiUrl)
                .then(response => response.json())
                .then(data => {
                    const temperature = data.main.temp;
                    const description = data.weather[0].description;
                    weatherInfoElement.innerHTML = `<p>Temperature: ${temperature} С</p>`;
                    weatherInfoElement.innerHTML += `<p>Description: ${description}</p>`;
                })
                .catch(error => {
                    console.error('Error fetching weather data:', error);
                    weatherInfoElement.innerHTML = '<p>Error fetching weather data. Please try again.</p>';
                });
        } else {
            weatherInfoElement.innerHTML = '<p>Please enter a city name.</p>';
        }
    });
});
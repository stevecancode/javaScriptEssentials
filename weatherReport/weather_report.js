function showweatherDetails(event) {
    event.preventDefault();
    const city = document.getElementById('city').value;
    const apiKey = '757b3dd46b21959109f4dbd2090ef627'; // Replace 'YOUR_API_KEY' with your actual API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
        const weatherInfo = document.getElementById('weatherInfoCity');
        weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
                                <p>Temperature: ${data.main.temp} &#8451;</p>
                                <p>Weather: ${data.weather[0].description}</p>`;
        })
        .catch(error => {
            console.error('Error fetching weather:', error);
            const weatherInfo = document.getElementById('weatherInfoCity');
            weatherInfo.innerHTML = `<p>Failed to fetch weather. Please try again.</p>`;
          });
    }

function showweatherDetailsCoord(event) {
    event.preventDefault();
    const lat = document.getElementById('lat').value;
    const lon = document.getElementById('lon').value;
    const apiKey = '757b3dd46b21959109f4dbd2090ef627'; // Replace 'YOUR_API_KEY' with your actual API key
    const apiURLCoordinates = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;

    fetch(apiURLCoordinates)
        .then(response => response.json())
        .then(data => {
        const weatherInfo = document.getElementById('weatherInfoCoordinates');
        weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
                                <p>Temperature: ${data.main.temp} &#8451;</p>
                                <p>Weather: ${data.weather[0].description}</p>`;
        })
        .catch(error => {
            console.error('Error fetching weather:', error);
            const weatherInfo = document.getElementById('weatherInfoCoordinates');
            weatherInfo.innerHTML = `<p>Failed to fetch weather. Please try again: ${apiURLCoordinates}</p>`;
            });
    }
    
document.getElementById('weatherFormCity').addEventListener('submit',showweatherDetails );
document.getElementById('weatherFormCoordinates').addEventListener('submit',showweatherDetailsCoord );
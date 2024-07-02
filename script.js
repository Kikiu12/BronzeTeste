document.getElementById('scheduleForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    
    // Exibir a previsão do tempo
    fetchWeather(date, time);
});

function fetchWeather(date, time) {
    const apiKey = 'SUA_API_KEY_AQUI';  // Insira sua chave da API do OpenWeatherMap
    const lat = 'SUA_LATITUDE_AQUI';  // Insira a latitude do local
    const lon = 'SUA_LONGITUDE_AQUI';  // Insira a longitude do local
    
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=pt_br`)
        .then(response => response.json())
        .then(data => {
            const weatherInfo = `
                <p>Temperatura: ${data.main.temp}°C</p>
                <p>Condição: ${data.weather[0].description}</p>
                <p>Humidade: ${data.main.humidity}%</p>
            `;
            document.getElementById('weather-info').innerHTML = weatherInfo;
        })
        .catch(error => {
            console.error('Erro ao buscar previsão do tempo:', error);
            document.getElementById('weather-info').innerHTML = 'Erro ao buscar previsão do tempo.';
        });
}

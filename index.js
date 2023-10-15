function getWeatherInfo() {
    const data = null;

    let city = document.getElementById("city").value;
    console.log(city);

    const xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener('readystatechange', function () {
        if (this.readyState === this.DONE) {
            console.log(this.responseText);
            let weather = JSON.parse(this.responseText)
            const weatherInfo = document.getElementById('weather-info');
                    weatherInfo.innerHTML = `
                        <h2>Weather in ${weather.location.name}</h2>
                        <p>Temperature: ${weather.current.temp_c}°C</p>
                        <p>Weather: ${weather.current.condition.text}</p>
                        
                    `;
        }
    });

    let url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${city}`;

    xhr.open('GET', url);
    xhr.setRequestHeader('X-RapidAPI-Key', '011135629dmsh1a9714889029b7ep12da5djsnc9cb36f3ae86');
    xhr.setRequestHeader('X-RapidAPI-Host', 'weatherapi-com.p.rapidapi.com');

    xhr.send(data);
}
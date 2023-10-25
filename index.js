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
                    <div class="row">
                        <div class="col-md-12">
                            <div class="card mb-4">
                                <h1 class="card-body mx-auto">${weather.location.name}, ${weather.location.region}, ${weather.location.country}</h1>
                            </div>
                        
                        </div>
                        <div class="col-md-4">
                            <div class="card mb-4">
                                <h3 class="card-body">Temperature: ${weather.current.temp_c}°C</h3>
                            </div>
                        </div>

                        <div class="col-md-4">
                            <div class="card mb-4">
                                <h3 class="card-body">Feels like: ${weather.current.feelslike_c}</h3>
                            </div>
                        </div>

                        <div class="col-md-4">
                            <div class="card mb-4">
                                <h3 class="card-body">Weather: ${weather.current.condition.text}</p>
                            </div>
                        </div>

                        

                    </div>
                        
                    `;
        }
    });

    let url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${city}`;

    xhr.open('GET', url);
    xhr.setRequestHeader('X-RapidAPI-Key', '011135629dmsh1a9714889029b7ep12da5djsnc9cb36f3ae86');
    xhr.setRequestHeader('X-RapidAPI-Host', 'weatherapi-com.p.rapidapi.com');

    xhr.send(data);
}
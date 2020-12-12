// API OpenWeather
const openWeatherKey = '8c941c8ee9ca55c3f0134cfab36ce586';
const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather';
const weatherUrl1 = 'https://api.openweathermap.org/data/2.5/onecall';

// Elements
const $input = $('#city');
const $submit = $('#button');
const $container = $('.container');
const $weatherAll = $('.weather-wrapper');
const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// AJAX Forecast
const getForecast = async () => {
    const urlToFetch = `${weatherUrl}?&q=${$input.val()}&APPID=${openWeatherKey}`;
    try {
        const response = await fetch(urlToFetch);
        if (response.ok) {
            const jsonResponse0 = await response.json();
            const lat = jsonResponse0.coord.lat;
            const lon = jsonResponse0.coord.lon;

            const urlToFetch1 = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&appid=${openWeatherKey}&units=metric`;
            const response1 = await fetch(urlToFetch1);

            if (response1.ok) {
                const jsonResponse1 = await response1.json();
                return jsonResponse1.daily; 

            }

        }
    } catch(error) {
        console.log(error);

    }
}

// Render

const renderForecast = (days) => {
    const weatherContent = createWeatherHTML(days);
  }

  const executeSearch = () => {
    $weatherAll.empty();
    $container.css('visibility', 'visible');
    getForecast().then(forecast => renderForecast(forecast));
    return false;
  };
  
  $submit.click(executeSearch);
  
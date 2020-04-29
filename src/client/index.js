import { checkForName } from './js/nameChecker';
import { handleSubmit } from './js/formHandler';
import { WeatherServicesSingleton } from './js/weather-services';

import './styles/resets.scss';
import './styles/base.scss';
import './styles/footer.scss';
import './styles/form.scss';
import './styles/header.scss';

const webServices = WeatherServicesSingleton.getInstance();
webServices.set('&appid=be40e6c98cb3c7bdec82f9dbba07c905', 'https://api.openweathermap.org/data/2.5/weather?', 'http://localhost:8081');

document.querySelector('#fetch-weather').addEventListener('click', () => {
    const query = webServices.queryWeatherByZipCode('35801', 'us');
    webServices.getRequestAPI(query).then((response) => {
        try {
            webServices.handleResponse(response, () => { alert(`Fetched: ${webServices.weatherData.name}`) });
        } catch (error) {
            alert(error);
        }
    }).catch(() => {
        alert('503 Server Error Connection');
    });
});

export { checkForName, handleSubmit, WeatherServicesSingleton }; //So they can be part of the Client library
//? Joshua Evans - 2025-05-17
/**  @typedef {import('./classes/forecast-day.js')} ForecastDay*/

import City from './classes/city.js';

import parseForecast from './weather-parsing.js';
import {getWeekday, getMonth} from './dates.js';

// sample OpenWeatherMap weather api call
//https://api.openweathermap.org/data/2.5/forecast?units=imperial&lat=43.9698&lon=-123.2006&appid=e366707bc2ea3e949fb1c0a16ce76d59
// sample OpenWeatherMap geolocation api call
// http://api.openweathermap.org/geo/1.0/zip?zip=97405,US&appid=e366707bc2ea3e949fb1c0a16ce76d59

class Weather {
  //* ========================== UI Elements ==========================
  /**
   * @type {HTMLFormElement}
   * The form element for the zipcode input
   */
  $zipCodeForm;

  /**
   * @type {HTMLInputElement}
   * The input element for the zipcode
   */
  $zipCodeInput;

  /**
   * @type {HTMLDivElement}
   * The div element that displays the weather list
   */
  $weatherList;

  /**
   * @type {HTMLDivElement}
   * The div element that displays the current day weather details
   */
  $currentDay;

  //* ========================== PROPERTIES ==========================
  /**
   * The current state of the Weather app
   */
  state = {
    /** The zip code data is being retrieved for */
    zipcode: '',

    /** @type {City} The city data retrieved from the OpenWeatherMap API */
    city: {},

    /** @type {ForecastDay[]} The actual forecast */
    forecast: [],

    /** @type {ForecastDay[]} The date the forecast is for */
    selectedDate: null,

    /** Offset to use for the current timezone */
    timezoneOffset: 0,
  };

  /**
   * URL for the OpenWeatherMap API to get weather data
   */
  get weatherUrl() {
    return `https://api.openweathermap.org/data/2.5/forecast?units=imperial&${this.apiKey}&`;
  }

  /**
   * URL for the OpenWeatherMap API to get geolocation data
   */
  get geoUrl() {
    return `http://api.openweathermap.org/geo/1.0/zip?${this.apiKey}&`;
  }

  /**
   * API key for the OpenWeatherMap API
   *! THIS IS EXTREMELY BAD PRACTICE
   */
  apiKey = 'appid=15362bcec3bacdade23a563757ba2102';

  //* ========================== METHODS ==========================
  /**
   * Fetches city geolocation data from the OpenWeatherMap API
   * @param {string} zipcode The zipcode to fetch city geolocation data for
   */
  getCityData = async (zipcode) => {
    const url = `${this.geoUrl}zip=${zipcode},US`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error fetching location data: ${response.statusText}`);
    }
    const responseData = await response.json();
    return new City(responseData);
  };

  /**
   * Fetches weather data for a particular city
   *
   * @param {City} city The city to get weather data for
   */
  getWeatherData = async (city) => {
    const url = `${this.weatherUrl}lat=${city.lat}&lon=${city.lon}`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error fetching weather data: ${response.statusText}`);
    }
    const responseData = await response.json();
    return responseData;
  };

  /**
   * Render the current day's weather details
   *
   * @param {ForecastDay} forecastDay
   * @returns {string} HTML string for the current day's weather details
   */
  renderCurrentDay = (forecastDay) => {
    const date = forecastDay.dt;
    const weekDay = getWeekday(date);

    return /*html*/`
      <div class="current-day">
        <h1 class="day-header">${weekDay} in ${this.state.city.name}</h1>
        <div class="weather">
        <p>
            <img src="http://openweathermap.org/img/w/${forecastDay.icon}.png" alt="${forecastDay.description}">
            ${forecastDay.description}
        </p>
      </div>
      <div class="details flex-parent">
        <div class="temperature-breakdown">
          <p>Morning Temperature: ${forecastDay.morningTemp}°F</p>
          <p>Day Temperature: ${forecastDay.dayTemp}°F</p>
          <p>Evening Temperature: ${forecastDay.eveningTemp}°F</p>
          <p>Night Temperature: ${forecastDay.nightTemp}°F</p>
        </div>
        <div class="misc-details">
          <p>Atmospheric Pressure: ${forecastDay.pressure} hPa</p>
          <p>Humidity: ${forecastDay.humidity}%</p>
          <p>Wind Speed: ${forecastDay.wind} mph</p>
        </div>
      </div>
    `;
  };

  /**
   * Render a single weather list item
   *
   * @param {ForecastDay} forecastDay A single forecast day to render
   * @param {number} index Index of the forecast day in the list
   */
  renderWeatherListItem = (forecastDay, index) => {
    const date = forecastDay.dt;
    const weekDay = getWeekday(date);
    const month = getMonth(date);

    return /*html*/`
      <div class="weather-list-item col" data-index="${index}">
        <h2>${month} ${date.getDate()}</h2>
        <h3>${weekDay}</h3>
        <h3>${forecastDay.minTemp}°F | ${forecastDay.maxTemp}°F</h3>
      </div>
    `;
  };

  /**
   * Render the entire weather list
   *
   * @param {ForecastDay[]} forecast The forecast data to render
   */
  renderWeatherList = (forecast) => {
    const weatherListHtml = forecast.map((forecastDay, index) => {
      return this.renderWeatherListItem(forecastDay, index);
    }).join('');

    return weatherListHtml;
  };

  //* ========================== EVENT HANDLERS ==========================
  /**
   * Handle clicking a weather list item
   *
   * @param {Event} event
   */
  onClickWeatherListItem = (event) => {
    const target = event.target.closest('.weather-list-item');
    const dataIndex = target.getAttribute('data-index');

    const forecastDayHtml = this.renderCurrentDay(this.state.forecast[dataIndex]);
    this.$currentDay.innerHTML = forecastDayHtml;
  };

  /**
   * Handle submitting the zipcode input form
   *
   * @param {Event} event
   */
  onFormSubmit = async (event) => {
    event.preventDefault();

    try {
      // Get and store geolocation data
      const zipCode = this.$zipCodeInput.value;
      const cityData = await this.getCityData(zipCode);
      this.state.zipcode = zipCode;
      this.state.city = cityData;

      // Get and store weather data
      const weatherData = await this.getWeatherData(cityData);
      this.state.timezoneOffset = weatherData.city.timezone;

      const forecast = parseForecast(weatherData.list, this.state.timezoneOffset);
      this.state.forecast = forecast;
      this.state.selectedDate = forecast[0].dt;

      // Render the weather list
      const weatherListHtml = this.renderWeatherList(forecast);
      this.$weatherList.innerHTML = weatherListHtml;

      const weatherListItemElements = Array.from(this.$weatherList.querySelectorAll('.weather-list-item'));
      weatherListItemElements.forEach((item) => {
        item.addEventListener('click', this.onClickWeatherListItem);
      });
    } catch(e) {
      console.error(e);
      alert(e.message);
      return;
    }
  };

  //* ========================== BUILT-INS ==========================
  constructor() {
    this.$zipCodeForm = document.querySelector('#zipForm');
    this.$zipCodeInput = document.querySelector('#zipcode');
    this.$weatherList = document.querySelector('#weatherList');
    this.$currentDay = document.querySelector('#currentDay');

    this.$zipCodeForm.addEventListener('submit', this.onFormSubmit);
  }
}

export default Weather;

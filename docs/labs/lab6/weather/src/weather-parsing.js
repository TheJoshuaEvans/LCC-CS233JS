import ForecastDay from './classes/forecast-day.js';

function getIndexOfMidnight(firstDate/*, timezoneOffset*/) {
  const dt = firstDate * 1000;
  const date = new Date(dt);
  //let utcHours = date.getUTCHours();
  //let localHours = utcHours + timezoneOffset;
  const localHours = date.getHours();
  const firstMidnightIndex = (localHours > 2 ) ?
    Math.round((24 - localHours)/3) :
    Math.abs(Math.round(localHours / 3));
  return firstMidnightIndex;
}

function findMinTemp(forecast, indexOfMidnight) {
  let min = forecast[indexOfMidnight].main.temp_min;
  for (let i = indexOfMidnight + 1; i < indexOfMidnight + 8; i++)
    if (forecast[i].main.temp_min < min)
      min = forecast[i].main.temp_min;
  return min;
}

function findMaxTemp(forecast, indexOfMidnight) {
  let max = forecast[indexOfMidnight].main.temp_max;
  for (let i = indexOfMidnight + 1; i < indexOfMidnight + 8; i++)
    if (forecast[i].main.temp_max > max)
      max = forecast[i].main.temp_max;
  return max;
}

/** @returns {ForecastDay[]} */
export default function parseForecast(forecast, timezoneOffset) {
  const simpleForecast = new Array();
  const MIDNIGHT = getIndexOfMidnight(forecast[0].dt, timezoneOffset);
  const NOON = 4;
  const SIXAM = 2;
  const SIXPM = 6;
  const NINEPM = 7;
  const MORNING = SIXAM;
  const DAY = NOON;
  const EVENING = SIXPM;
  const NIGHT = NINEPM;
  const PERDAY = 8;
  // const DAYS = 4;
  for (let i = MIDNIGHT; i < forecast.length - NINEPM; i+=PERDAY) {
    const oneDay = new Object();
    //oneDay.dt = forecast[i + NOON].dt;
    oneDay.dt = new Date(forecast[i + NOON].dt * 1000);
    oneDay.temp = forecast[i + NOON].main.temp;
    oneDay.minTemp = findMinTemp(forecast, i);
    oneDay.maxTemp = findMaxTemp(forecast, i);
    oneDay.morningTemp = forecast[i + MORNING].main.temp;
    oneDay.dayTemp = forecast[i + DAY].main.temp;
    oneDay.eveningTemp = forecast[i + EVENING].main.temp;
    oneDay.nightTemp = forecast[i + NIGHT].main.temp;
    oneDay.description = forecast[i + NOON].weather[0].description;
    oneDay.icon = forecast[i + NOON].weather[0].icon;
    oneDay.pressure = forecast[i + NOON].main.pressure;
    oneDay.wind = forecast[i + NOON].wind.speed;
    oneDay.humidity = forecast[i + NOON].main.humidity;
    simpleForecast.push(new ForecastDay(oneDay));
  }
  return simpleForecast;
}

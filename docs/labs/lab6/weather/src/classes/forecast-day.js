//? Joshua Evans - 2025-05-17
class ForecastDay {
  /** @type {Date} The date for this forecast */
  dt;
  /** @type {number} The average temperature */
  temp;
  /** @type {number} The minimum temperature */
  minTemp;
  /** @type {number} The maximum temperature */
  maxTemp;
  /** @type {number} The morning temperature */
  morningTemp;
  /** @type {number} The day temperature */
  dayTemp;
  /** @type {number} The evening temperature */
  eveningTemp;
  /** @type {number} The night temperature */
  nightTemp;
  /** @type {string} The weather description */
  description;
  /** @type {string} The weather icon */
  icon;
  /** @type {number} The atmospheric pressure */
  pressure;
  /** @type {number} The wind speed */
  wind;
  /** @type {number} The humidity */
  humidity;

  /** @param {ForecastDay} props */
  constructor(props) {
    Object.assign(this, props);
  }
}

export default ForecastDay;

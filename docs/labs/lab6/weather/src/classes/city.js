//? Joshua Evans - 2025-05-17
class City {
  /** @type {string} The zip code used to find the city */
  zip = '';
  /** @type {string} The name of the city */
  name = '';
  /** @type {number} The latitude of the city */
  lat = 0;
  /** @type {number} The longitude of the city */
  lon = 0;
  /** @type {string} The country code of the city */
  country = '';

  /**
   * @param {City} props
   */
  constructor(props) {
    Object.assign(this, props);
  }
};

export default City;

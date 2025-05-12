class LinkPreviewData {
  /**
   * @type {string}
   * A human friendly description of the website the link points to
   */
  description = '';

  /**
   * @type {string}
   * The URL of the image that represents the website
   */
  image = '';

  /**
   * @type {string}
   * The title of the website
   */
  title = '';

  /**
   * @type {string}
   * The URL of the website
   */
  url = '';

  /**
   * @param {LinkPreviewData} props
   */
  constructor(props) {
    Object.assign(this, props);
  }
};

export default LinkPreviewData;

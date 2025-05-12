class Memes {
  //* ================ HTML ELEMENTS ==================== */
  /**
   * @type {HTMLElement}
   * Input element for the bottom text of the meme
   */
  $bottomTextInput;

  /**
   * @type {HTMLCanvasElement}
   * The canvas element that displays the meme
   */
  $canvas;

  /**
   * @type {HTMLElement}
   * The default image that is used to create the meme
   */
  $defaultImage;

  /**
   * @type {HTMLElement}
   * The button element that allows the user to download the meme
   */
  $downloadButton;

  /**
   * @type {HTMLElement}
   * The input element for the font size
   */
  $fontSizeInput;

  /**
   * @type {HTMLElement}
   * The input element for the image
   */
  $imageInput;

  /**
   * @type {HTMLImageElement}
   * The image that is used to create the meme
   */
  $image;

  /**
   * @type {HTMLElement}
   * Input element for the top text of the meme
   */
  $topTextInput;

  //* ================ PROPERTIES ==================== */
  /**
   * The context of the canvas element
   */
  canvasContext;

  /**
   * @type {number}
   * The width of the window
   */
  deviceWidth;

  //* ================ METHODS ==================== */
  /**
   * Add all the event listeners to the UI elements
   */
  addEventListeners = () => {
    // Create the meme when the user types in the bottom text input
    this.$bottomTextInput.addEventListener('keyup', this.createMeme);
    this.$bottomTextInput.addEventListener('change', this.createMeme);
    this.$downloadButton.addEventListener('click', this.downloadMeme);
    this.$fontSizeInput.addEventListener('keyup', this.createMeme);
    this.$fontSizeInput.addEventListener('change', this.createMeme);
    this.$imageInput.addEventListener('change', this.loadImage);
    this.$topTextInput.addEventListener('keyup', this.createMeme);
    this.$topTextInput.addEventListener('change', this.createMeme);
  };

  /**
   * Create the initial
   */
  createCanvas = () => {
    this.$canvas.width = Math.min(1000, this.deviceWidth - 30);
    this.$canvas.height = Math.min(1000, this.deviceWidth);
  };

  /**
   * Create the meme by drawing the image and the text on the canvas
   */
  createMeme = () => {
    this.canvasContext.clearRect(0, 0, this.$canvas.width, this.$canvas.height);
    this.resizeImage(this.$image.width, this.$image.height);
    this.canvasContext.drawImage(this.$image, 0, 0);

    // Set the font size based on the canvas size IF a font size is not provided
    const userFontSize = this.$fontSizeInput.value;
    const fontSize = userFontSize ? userFontSize : ((this.$canvas.width + this.$canvas.height) / 2) * 4 / 100;
    this.canvasContext.font = `${fontSize}pt sans-serif`;
    this.canvasContext.textAlign = 'center';
    this.canvasContext.textBaseline = 'top';
    this.canvasContext.lineWidth = fontSize / 5;
    this.canvasContext.strokeStyle = 'black';
    this.canvasContext.fillStyle = 'white';

    const bottomText = this.$bottomTextInput.value.toUpperCase();
    this.canvasContext.strokeText(bottomText, this.$canvas.width / 2, (this.$canvas.height * 3) / 4);
    this.canvasContext.fillText(bottomText, this.$canvas.width / 2, (this.$canvas.height * 3) / 4);

    const topText = this.$topTextInput.value.toUpperCase();
    this.canvasContext.strokeText(topText, this.$canvas.width / 2, (this.$canvas.height) / 4);
    this.canvasContext.fillText(topText, this.$canvas.width / 2, (this.$canvas.height) / 4);
  };

  /**
   * Triggers the download of the meme from the canvas
   */
  downloadMeme = () => {
    const imageSource = this.$canvas.toDataURL('image/png');
    this.$downloadButton.setAttribute('href', imageSource);
    this.$downloadButton.setAttribute('download', 'meme.png');
  };

  /**
   * Load an image from the file input into the canvas
   */
  loadImage = () => {
    if (this.$imageInput.files && this.$imageInput.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.$image = new Image();
        this.$image.onload = () => {
          this.createMeme();
          this.downloadMeme();
        };
        this.$image.src = e.target.result;
      };
      reader.readAsDataURL(this.$imageInput.files[0]);
    }
  };

  /**
   * @param {number} canvasHeight
   * @param {number} canvasWidth
   */
  resizeCanvas = (canvasHeight, canvasWidth) => {
    let height = canvasHeight;
    let width = canvasWidth;
    let scale = 1;
    while (height > Math.min(1000, this.deviceWidth - 30) && width > Math.min(1000, this.deviceWidth - 30)) {
      height /= 2;
      width /= 2;
      scale /= 2;
    }
    this.$canvas.height = height;
    this.$canvas.width = width;
    this.canvasContext.scale(scale, scale);
  };

  /**
   * Resize the image
   */
  resizeImage = () => {
    const imageHeight = this.$image.height;
    const imageWidth = this.$image.width;
    this.resizeCanvas(imageHeight, imageWidth);
  };

  constructor() {
    this.$bottomTextInput = document.querySelector('#bottomText');
    this.$canvas = document.querySelector('#imgCanvas');
    this.$defaultImage = document.querySelector('#defaultImage');
    this.$downloadButton = document.querySelector('#downloadMeme');
    this.$fontSizeInput = document.querySelector('#fontSize');
    this.$imageInput = document.querySelector('#image');
    this.$image = this.$defaultImage;
    this.$topTextInput = document.querySelector('#topText');

    this.canvasContext = this.$canvas.getContext('2d');
    this.deviceWidth = window.innerWidth;

    this.createCanvas();
    this.createMeme();
    this.addEventListeners();
  }
}

export default Memes;

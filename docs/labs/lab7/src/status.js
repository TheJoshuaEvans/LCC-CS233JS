// Notice the import statements
import './general.js';
import { Chart, registerables } from 'chart.js';

class Status {
  //* =============== METHODS =============== */
  /**
  * Take raw data from the api and return the number of time each value for that property occurs for a participant.
  *
  * @param {object} data The data to group
  * @param {string} property The property to group by
  */
  groupData = (data, property) => {
    return data.map(val => val[property]).reduce((acc, val) => {
      acc[val] = (acc[val] || 0) + 1;
      return acc;
    }, {});
  };

  /**
   * Load data from the server and process it to create charts.
   */
  loadData = async () => {
    const SERVER_URL = SERVER_URL || 'http://localhost:3000/participants';

    this.$loadingIndicator.classList.remove('visually-hidden');
    const fetchResult = await fetch(SERVER_URL);
    this.$loadingIndicator.classList.add('visually-hidden');

    if (!fetchResult.ok) {
      this.$errorMessage.classList.remove('visually-hidden');
      this.$tabArea.classList.add('visually-hidden');
      this.$chartArea.classList.add('visually-hidden');
      return;
    }

    const jsonData = await fetchResult.json();
    this.allData = jsonData;
    this.experienceData = this.groupData(this.allData, 'experience');
    this.professionData = this.groupData(this.allData, 'profession');
    this.$loadingIndicator.classList.add('visually-hidden');
    this.$tabArea.classList.remove('visually-hidden');
    this.$chartArea.classList.remove('visually-hidden');
    this.createExperienceChart();
    this.createProfessionChart();
    this.showExperience();
  };

  /**
   * Add event listeners to the tabs for showing the charts.
   */
  addEventListeners = () => {
    this.$experienceTab.addEventListener('click', this.showExperience);
    this.$professionTab.addEventListener('click', this.showProfession);
  };

  /**
   * Hide both charts and remove the active class from the tabs.
   */
  hideCharts = () => {
    this.$experienceTab.classList.remove('active');
    this.$professionTab.classList.remove('active');
    this.$professionCanvas.classList.add('visually-hidden');
    this.$experienceCanvas.classList.add('visually-hidden');
  };

  /**
   * Create hte experience chart using the data grouped by experience level.
   */
  createExperienceChart = () => {
    const chartData = {
      datasets: [{
        data: [this.experienceData.beginner, this.experienceData.intermediate, this.experienceData.advanced], // the chart expects the values in an array in this order
        backgroundColor:[
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
        ],
        borderColor: [
          'white',
          'white',
          'white',
        ],
        borderWidth: 1,
      }],
      labels: [
        'Beginner',
        'Intermediate',
        'Advanced',
      ],
    };
    new Chart(this.$experienceCanvas, {
      type: 'pie',
      data: chartData,
      options: {},
    });
  };

  /**
   * Show the experience chart and hide the profession chart.
   */
  showExperience = (event = null) => {
    if(event) event.preventDefault();
    this.hideCharts();
    this.$experienceCanvas.classList.remove('visually-hidden');
    this.$experienceTab.classList.add('active');
  };

  /**
   * Create the profession chart using the data grouped by profession.
   */
  createProfessionChart = () => {
    const chartData = {
      datasets: [{
        data: [
          this.professionData.school,
          this.experienceData.college,
          this.experienceData.trainee,
          this.experienceData.employee,
        ], // the chart expects the values in an array in this order
        backgroundColor:[
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(14, 149, 203, 0.6)',
        ],
        borderColor: [
          'white',
          'white',
          'white',
          'white',
        ],
        borderWidth: 1,
      }],
      labels: [
        'School Students',
        'College Students',
        'Trainees',
        'Employees',
      ],
    };
    new Chart(this.$professionCanvas, {
      type: 'pie',
      data: chartData,
      options: {},
    });
  };

  /**
   * Show the profession chart and hide the experience chart.
   */
  showProfession = (event = null) => {
    if(event) event.preventDefault();
    this.hideCharts();
    this.$professionCanvas.classList.remove('visually-hidden');
    this.$professionTab.classList.add('active');
  };

  //* =============== CONSTRUCTOR =============== */
  constructor() {
    Chart.register(...registerables);

    // Get references to elements on the page
    this.$experienceTab = document.querySelector('#experienceTab');
    this.$professionTab = document.querySelector('#professionTab');
    this.$experienceCanvas = document.querySelector('#experienceChart');
    this.$professionCanvas = document.querySelector('#professionChart');
    this.$loadingIndicator = document.querySelector('#loadingIndicator');
    this.$tabArea = document.querySelector('#tabArea');
    this.$chartArea = document.querySelector('#chartArea');
    this.$errorMessage = document.querySelector('#loadingError');

    // Instance variables for the data that comes back from the service
    this.allData = null;
    this.professionData = null;
    this.experienceData = null;

    // Instance variables for the chart objects themselves
    this.experienceChart = null;
    this.professionChart = null;

    this.loadData();
    this.addEventListeners();
  }
}

window.onload = () => {
  window.statusJs = new Status();
};

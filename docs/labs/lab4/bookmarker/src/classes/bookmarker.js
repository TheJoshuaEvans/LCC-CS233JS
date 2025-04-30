//? Joshua Evans - 2025-04-30
import Bookmark from './bookmark.js';

/**
 * List of bookmarks to use as default if none are found in localStorage
 */
const defaultBookmarks = [
  new Bookmark({
    title: 'Example Bookmark',
    description: 'This is an example bookmark.',
    link: 'https://google.com',
  }),
  new Bookmark({
    title: 'Example Bookmark 1',
    description: 'This is another example bookmark.',
    link: 'https://thejoshuaevans.com',
  }),
];

class Bookmarker {
  //* -------- PROPERTIES -------- */
  /**
   * Array of bookmarks managed by the bookmarker
   * @type {Bookmark[]}
   */
  bookmarks = defaultBookmarks;

  //* -------- METHODS -------- */
  /**
   * Add event handlers to all the delete icons in the bookmarks list
   */
  addDeleteEventHandlers = () => {
    // Get all the delete icons and add event listeners to them
    const deleteIcons = Array.from(document.querySelectorAll('.delete-icon'));
    deleteIcons.forEach((icon, index) => {
      icon.addEventListener('click', (event) => {
        event.preventDefault();
        this.deleteBookmark(index);
      });
    });
  };

  /**
   * Generate and render all the bookmarks in the bookmarks list
   */
  fillBookmarks = () => {
    // Go ahead and save our bookmarks to local storage
    this.saveBookmarks(this.bookmarks);

    // Generate the HTML for each bookmark and add it to the bookmarks list wrapper
    const bookmarksListWrapper = document.getElementById('bookmarks-list');
    const bookmarksHtml = this.bookmarks.map(bookmark => bookmark.generateHtml()).join('');
    bookmarksListWrapper.innerHTML = bookmarksHtml;

    // Add event handlers to the delete icons
    this.addDeleteEventHandlers();
  };

  /**
   * Delete a bookmark from the bookmarks list
   *
   * @param {number} index Index of the bookmark to delete
   */
  deleteBookmark = (index) => {
    console.log('deleteBookmark');
    if (index < 0 || index >= this.bookmarks.length) {
      console.error('Invalid bookmark index:', index);
      return;
    }

    // Remove the bookmark from the array
    this.bookmarks.splice(index, 1);

    // Re-render!
    this.fillBookmarks();
  };

  /**
   * Save bookmarks to localStorage
   */
  saveBookmarks = (bookmarksToSave) => {
    localStorage.setItem('bookmarks', JSON.stringify(bookmarksToSave));
  };

  /**
   * Attempt to load bookmarks from localStorage. Will return an empty array if none are found
   * @returns {Bookmark[]}
   */
  loadBookmarks = () => {
    let storedBookmarks = localStorage.getItem('bookmarks') ?? [];
    if (storedBookmarks.length) {
      const parsedBookmarks = JSON.parse(storedBookmarks);
      storedBookmarks = parsedBookmarks.map(bookmark => new Bookmark(bookmark));
    }

    return storedBookmarks;
  };

  //* -------- EVENT HANDLERS -------- */
  /**
   * Add a bookmark to the bookmarks list
   */
  addBookmark = (event) => {
    event.preventDefault();

    // Extract the form fields
    const [urlInput, descriptionInput] = event.target;
    const url = urlInput.value.trim();
    const description = descriptionInput.value.trim();

    const newBookmark = new Bookmark({
      title: url, description: description, link: url,
    });
    this.bookmarks.push(newBookmark);

    this.fillBookmarks();

    // Clear input fields after adding the bookmark
    urlInput.value = '';
    descriptionInput.value = '';
  };

  constructor() {
    // Attempt to get bookmarks from localStorage
    const storedBookmarks = this.loadBookmarks();
    if (storedBookmarks.length) {
      this.bookmarks = storedBookmarks;
    }

    // Add the event listener for adding bookmarks
    const addBookmarkForm = document.getElementById('bookmark-form');
    addBookmarkForm.onsubmit = this.addBookmark;

    // Render all the bookmarks
    this.fillBookmarks();
  }
}

export default Bookmarker;
export { Bookmark };

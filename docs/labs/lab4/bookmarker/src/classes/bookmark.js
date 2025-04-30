//? Joshua Evans - 2025-04-30
/**
 * A single bookmark managed by the bookmarker
 */
class Bookmark {
  /**
   * Human-friendly description of the bookmark target
   * @type {string}
   */
  description = '';

  /**
   * Image URL to associate with the bookmark
   * @type {string}
   */
  image = '';

  /**
   * URL that the bookmark points to
   * @type {string}
   */
  link = '';

  /**
   * Title of the bookmark
   * @type {string}
   */
  title = '';

  /**
   * Generate and returns an HTML representation of the bookmark
   * @return {string}
   */
  generateHtml() {
    const html = /*html*/`
      <a href="${this.link}" target="_blank" class="bookmark">
        <div class="img" style="background-image:url('${this.image}')">&nbsp;</div>
        <div class="title">
          ${this.title}
          <br>
          ${this.description}
        </div>
        <div><i name="deleteBookmark" class="bi-trash delete-icon"></i></div>
      </a>
    `;

    return html;
  }

  /**
   * @param {Bookmark} props
   */
  constructor(props) {
    this.description = props.description;
    this.link = props.link;
    this.title = props.title;

    // Do some special handling for the image property. If one isn't provided, set a default
    // using https://robohash.org/ :D
    this.image = props.image;
    if (!this.image) {
      this.image = `https://robohash.org/${encodeURIComponent(this.title)}.png?size90x60&set=set3`;
    }
  }
}

export default Bookmark;

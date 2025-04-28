//? Joshua Evans - 2025-04-24
/**
 * Class representing a single task item
 */
class TaskItem {
  /**
   * @param {TaskItem} props
   */
  constructor(props) {
    /**
     * The description of the task
     * @type {string}
     */
    this.description = props.description;

    /**
     * If the task has been completed
     * @type {boolean}
     */
    this.isComplete = props.isComplete;
  }

  /**
   * Generate the HTML for the task item
   *
   * @returns {string} The HTML for the task item
   */
  generateTaskHtml = () => {
    return /*html*/`
      <li class="list-group-item checkbox">
        <div class="row">
          <div class="col-sm-1 pt-2 checkbox">
            <label><input name="toggleTaskStatus" type="checkbox" value=""
            class="" ${(this.isComplete)?'checked':''}
            /></label>
          </div>
          <div class="col-sm-10 task-text ${(this.isComplete)?'complete':''}">
            ${this.description}
          </div>
          <div class="col-sm-1 pt-2 delete-icon-area">
            <a name="deleteTask"class="" href="">
                <i class="bi-trash delete-icon"></i>
            </a>
          </div>
        </div>
      </li>
    `;
  };
};

export default TaskItem;

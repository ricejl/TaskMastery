import { generateId } from "../utils.js";
import Item from "./Item.js";

export default class List {
  constructor({ listId = generateId(), title, items = [] }) {
    //TODO Your constructor takes in a data object that should have the properties you need to create your list here is a freebie, it will set the id its provided, or if that is undefined it will create a new one (this is an alternative to object destructuring)
    this.listId = listId;
    this.title = title;
    this.items = items.map(i => new Item(i));
  }

  get template() {
    return `
    <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
          <div class="card">
            <h5 class="card-header">${this.title}</h5>
            <div class="card-body">
              <ul class="card-text">
                <li>item</li>
              </ul>
              <form onsubmit="app.listController.addItem(event, '${this.listId}')">
                <div class="d-flex align-items-center">
                  <input
                    type="text"
                    name="item"
                    id="item"
                    class="form-control pr-5"
                    placeholder="New task..."
                  />
                  <button type="submit" class="btn-blank">
                    <i class="fa fa-plus"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>`;
  }
  //Be sure to add the methods needed to create the view template for this model
  //For starting out, your tasks may be strings alone, but later you may wish to turn them into full objects, that will be up to you
}

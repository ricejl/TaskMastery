import { generateId } from "../utils.js";
import Item from "./Item.js";

export default class List {
  constructor(listId, title, items) {
    //TODO Your constructor takes in a data object that should have the properties you need to create your list here is a freebie, it will set the id its provided, or if that is undefined it will create a new one (this is an alternative to object destructuring)
    this.listId = listId || generateId();
    this.title = title;
    this.items = items.map(i => new Item(i));
  }

  get template() {
    return `
    <div class="col-3">
          <div class="card">
            <h5 class="card-header">Featured</h5>
            <div class="card-body">
              <ul class="card-text">
                <li>item</li>
                <li>item</li>
                <li>item</li>
              </ul>
              <a href="#" class="btn btn-info">Add</a>
            </div>
          </div>
        </div>`;
  }
  //Be sure to add the methods needed to create the view template for this model
  //For starting out, your tasks may be strings alone, but later you may wish to turn them into full objects, that will be up to you
}

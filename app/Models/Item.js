import { generateId } from "../utils.js";

export default class Item {
  constructor({ item, itemId, listId }) {
    this.item = item;
    this.itemId = itemId || generateId();
    this.listId = listId;
  }

  get template() {
    return `
            <li><input type="checkbox" /><label for="item"> ${this.item}</label>
            <button class="btn-blank" type="button" onclick="app.listController.deleteItem('${this.listId}', '${this.itemId}')">
                <i class="fa fa-times"></i>
            </button></li>
    `;
  }
}

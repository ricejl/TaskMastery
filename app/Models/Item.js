import { generateId } from "../utils.js";

export default class Item {
  constructor({ item, itemId, listId }) {
    this.item = item;
    this.itemId = itemId || generateId();
    this.listId = listId;
  }

  get template() {
    return `
            <li>${this.item}</li>
    `;
  }
}

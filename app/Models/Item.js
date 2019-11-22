import { generateId } from "../utils.js";

export default class Item {
  constructor(id, listId, item) {
    this.id = id || generateId();
    this.listId = listId;
    this.item = item;
  }

  // TODO write getter
  // get template() {
  //     return ``
  // }
}

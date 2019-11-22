import _list from "../Models/List.js";
import _item from "../Models/Item.js";
import _store from "../store.js";
import List from "../Models/List.js";
import Item from "../Models/Item.js";

//Public
class ListService {
  constructor() {}

  addList(listData) {
    let list = new List(listData);
    _store.State.lists.push(list);
    _store.saveState();
  }

  addItem(itemData) {
    let item = new Item(itemData);
    let foundItem = _store.State.lists.find(list => list.listId == item.listId);
    foundItem.lists.push(item); //FIXME
    _store.saveState();
  }
  //TODO  Here is where we handle all of our business logic,
  //given the information you need in the controller,
  //what methods will you need to do when this class is first 'constructed'?
  //NOTE You will need this code to persist your data into local storage, be sure to call the store method to save after each change
}

const LISTSERVICE = new ListService();
export default LISTSERVICE;

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
    let foundItem = _store.State.lists.find(list => list.id == item.listId);
    foundItem.items.push(item);
    _store.saveState();
  }

  deleteItem(listId, itemId) {
    let foundList = _store.State.lists.find(list => list.id == listId);
    foundList.items = foundList.items.filter(item => item.itemId != itemId);
    _store.saveState();
  }

  deleteList(listId, callback) {
    let foundList = _store.State.lists.find(list => list.id == listId);
    let listIndex = _store.State.lists.indexOf(foundList);
    _store.State.lists.splice(listIndex, 1);
    _store.saveState();
    callback();
  }
  //NOTE  Here is where we handle all of our business logic,
  //given the information you need in the controller,
  //what methods will you need to do when this class is first 'constructed'?
  //NOTE You will need this code to persist your data into local storage, be sure to call the store method to save after each change
}

const LISTSERVICE = new ListService();
export default LISTSERVICE;

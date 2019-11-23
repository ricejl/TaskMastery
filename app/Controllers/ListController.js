import _listService from "../Services/ListService.js";
import _store from "../store.js";

//TODO Don't forget to render to the screen after every data change.
function _drawLists() {
  let template = "";
  let lists = _store.Lists;
  lists.forEach(list => (template += list.template));
  document.getElementById("lists").innerHTML = template;
}

//Public
export default class ListController {
  constructor() {
    //NOTE: After the store loads, we can automatically call to draw the lists.
    _drawLists();
  }

  addList(event) {
    event.preventDefault();
    let formData = event.target;
    let newList = {
      title: formData.title.value
    };

    _listService.addList(newList);
    formData.reset();
    _drawLists();
  }

  addItem(event, listId) {
    event.preventDefault();
    let formData = event.target;
    let newItem = {
      item: formData.item.value,
      listId: listId
    };

    _listService.addItem(newItem);
    formData.reset();
    _drawLists();
  }

  deleteItem(listId, itemId) {
    _listService.deleteItem(listId, itemId);
  }
  //TODO: Your app will need the ability to create, and delete both lists and listItems
}

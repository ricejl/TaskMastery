import ListService from "../Services/ListService.js";
import _store from "../store.js";

//TODO Don't forget to render to the screen after every data change.
function _drawLists() {
  let template = "";
  let lists = _store.State.lists;
  lists.forEach(list => (template += list.template));
  document.getElementById("lists").innerHTML = template;
  // TODO write foreach
}

//Public
export default class ListController {
  constructor() {
    //NOTE: After the store loads, we can automatically call to draw the lists.
    _drawLists();
  }

  //TODO: Your app will need the ability to create, and delete both lists and listItems
}

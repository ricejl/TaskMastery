import ListService from "../Services/ListService.js";

//TODO Don't forget to render to the screen after every data change.
function _drawLists() {
  let template = ""
  let list = 
}

//Public
export default class ListController {
  constructor() {
    console.log("hello from controller");

    //NOTE: After the store loads, we can automatically call to draw the lists.
    _drawLists();
  }

  //TODO: Your app will need the ability to create, and delete both lists and listItems
}

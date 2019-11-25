import ListService from "../Services/ListService.js";
import _store from "../store.js";

//NOTE Don't forget to render to the screen after every data change.
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

    ListService.addList(newList);
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

    ListService.addItem(newItem);
    formData.reset();
    _drawLists();
  }

  // NOTE avoid using window prompts because they stop javascript from running
  // deleteItem(listId, itemId) {
  //   if (!window.confirm("Delete item?")) {
  //     return;
  //   }
  //   ListService.deleteItem(listId, itemId);
  //   _drawLists();
  // }

  // deleteList(listId) {
  //   if (!window.confirm("Delete list?")) {
  //     return;
  //   }
  //   ListService.deleteList(listId);
  //   _drawLists();
  // }

  deleteItem(listId, itemId) {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then(result => {
      if (result.value) {
        ListService.deleteItem(listId, itemId);
        return;
      }
    });
    _drawLists();
  }

  deleteList(listId) {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then(result => {
      if (result.value) {
        ListService.deleteList(listId, _drawLists);
        return;
      }
      // NOTE option for confirmation
      // else {
      //   Swal.fire("Cancelled");
      // }
    });
    _drawLists();
  }
}

//NOTE result represents result of the Swal.fire; if result.value (a boolean) is true (you clicked yes) it will execute code immediately following, otherwise if false it will continue to execute any code below

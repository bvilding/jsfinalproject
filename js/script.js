// let todo = [];

// function Todo(taskTitle, taskDue) {
//   this.taskTitle = title;
//   this.taskDue = due;
// };
//
// let taskTitle = document.forms.taskEnter.field
// let taskDue = document.forms.taskEnter.due

// SVG Icons
var removeSVG = '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve"><path class="fill" d="M18,22H6V8H4v13.7C4,22.8,4.9,24,6,24h12c1.1,0,2-1.2,2-2.3V8h-2V22z M15,4V2H9v2H2v2h20V4H15z M9,10v10h2V10H9z M13,10v10h2V10H13z"/></svg>';
var completeSVG = '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve"> <path class="fill" d="M1,24h2V0H1V24z M16,6V2H5v2h9v8H5v2h7v4h11V6H16z M21,16h-7v-2h2V8h5V16z"/> </svg>';
var editSVG = '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve"> <path class="fill" d="M21.4,6L16,0.6l-14,14V20h5.4L21.4,6z M4,18v-2.6l12-12L18.6,6l-12,12H4z M2,22v2h20v-2H2z"/> </svg>';

// User clicks the add button
// If there is any text it will drop it into a Todo.
document.getElementById('add').addEventListener('click', function (){
  var value = document.getElementById('item').value;
  if (value) {
    addItemTodo(value);
    document.getElementById('item').value = '';
  }
  event.preventDefault();
});

function removeItem(){
  var item = this.parentNode.parentNode;
  var parent = item.parentNode;

  parent.removeChild(item);
}

function completeItem() {
  var item = this.parentNode.parentNode;
  var parent = item.parentNode;
  var id = parent.id;

  //Check if the item should be completed, or in todo.
  var target = (id === 'todo') ? document.getElementById('completed'):document.getElementById('todo');

  parent.removeChild(item);
  target.insertBefore(item, target.childNodes[0]);
}

function editItem(){
  var item = this.parentNode.parentNode;
  var text = item.value;
  console.log(this.parentNode.parentNode);
}

function addItemTodo(text){

  var list = document.getElementById('todo');

  var item = document.createElement('li');
  item.innerText = text;

  var buttons = document.createElement('div');
  buttons.classList.add('buttons');

  var remove = document.createElement('button');
  remove.classList.add('remove');
  remove.innerHTML = removeSVG;

  //Add click event for removing items
  remove.addEventListener('click', removeItem)

  var complete = document.createElement('button');
  complete.classList.add('complete');
  complete.innerHTML = completeSVG;

  //Add click event for completing items
  complete.addEventListener('click', completeItem)


  var edit = document.createElement('button');
  edit.classList.add('edit');
  edit.innerHTML = editSVG;

  //Edit the text content of the task
  edit.addEventListener('click', editItem)

  buttons.appendChild(remove);
  buttons.appendChild(edit);
  buttons.appendChild(complete);
  item.appendChild(buttons);

  list.insertBefore(item, list.childNodes[0]);

}

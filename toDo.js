
function addTask(){


var box =document.querySelector('.box').value;

var container = document.createElement('div');
container.className = "container";

var taskItem=document.querySelector('.taskItem')

var taskList = document.createElement('div');
taskList.className = "taskList";

var pElement = document.createElement('p');
pElement.textContent = box;



taskList.appendChild(pElement);
taskItem.appendChild(taskList);

}

// JavaScript Document

//selectors, identify the items that user interacts with in some way
//selector 1 the input field
const userInput = document.querySelector('.user-inputStr')
//selector 2 a list item 
const listItem = document.querySelector('.todo-list')
//selector 3 the input button 
const inputButton = document.querySelector('.submitInput')
//selector 4 clear all button
const clearAllButton = document.querySelector('.clearButton')
//selector 5 saveButton
const saveButtonSelect = document.querySelector('.saveButton')
// selector 5, bring in local storage
const previousListButton = document.querySelector('.localButton')

//Add event listeners, things the user can do that require a certain response
//eventListener 1 - when user clicks on the input button selector 3, execute createTask
inputButton.addEventListener('click', createTask)
//eventListener 2 - when user clicks on an item in the list -selector2- execute delCheck
listItem.addEventListener("click", delCheck)
//eventListener 3 - when user clicks on clear all button, execute clearAll
clearAllButton.addEventListener("click", clearAll)
//console.log(inputButton)
saveButtonSelect.addEventListener("click", saveLocal)

previousListButton.addEventListener("click", getPreviousList)
// functions
//createTask creates taskDiv with input, delete and check inside
function createTask(event) {
  event.preventDefault();
  //create taskDiv
  const taskDiv = document.createElement('div');
  taskDiv.classList.add('taskDiv');
  //create task that user input
  const taskItem = document.createElement('li');
  taskItem.classList.add('task');
  taskItem.innerText = userInput.value;
  taskDiv.appendChild(taskItem);
  //add check
  const checkIcon = document.createElement('button');
  checkIcon.classList.add('checked-Item');
  checkIcon.innerHTML = '<i class="fa-solid fa-check"></i>';
  taskDiv.appendChild(checkIcon);
  //add delete
  const deleteIcon = document.createElement('button');
  deleteIcon.classList.add('deleted-Item');
  deleteIcon.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
  taskDiv.appendChild(deleteIcon);
  //append taskDiv to the ul in html body
  listItem.appendChild(taskDiv);
  //clear value after input
  userInput.value = "";
}


//Delete or Check Function
function delCheck(e) {
//create variable that holds input array from click
	const buttonChoice = e.target;
	//create variable that holds parent of clicked item so whole section can be changed
	const taskStatus = buttonChoice.parentElement;
if (buttonChoice.classList[0] === 'checked-Item'){
	taskStatus.classList.add('markFinished')
} if (buttonChoice.classList[0] === 'deleted-Item'){
	taskStatus.classList.add('slideOut')
	taskStatus.addEventListener('transitionend', () => taskStatus.remove())
}
//if user clicks delete, remove item
//if user clicks check, change class to completed
}



//Clear List Function
function clearAll() {
	//using jQuery
	//$('.taskDiv').remove();
	//using forEach
	//document.querySelectorAll('.taskDiv').forEach(e => e.remove());
	//loop through array
	let taskArray = document.querySelectorAll('.taskDiv')
	for (var i = 0; i < taskArray.length; i++){
		//must go back to document with document. to effect the element, otherwise it just clears array
	document.getElementsByClassName('taskDiv')[0].remove();
	} 
}

function saveLocal() {
	localStorage.clear()
	var savedList = document.getElementById("saveSection")
	//console.log(savedList)
	localStorage.setItem('list', savedList.outerHTML)
	//var testedStore = localStorage.getItem('list')
	//var divTag = document.createElement('div')
	//divTag.innerHTML = testedStore
	//console.log(testedStore)
	//document.body.appendChild(divTag)

	} 
//Error here is appended div is shifted slightly to the left of the new tag, not sure why
function getPreviousList() {
	//var saveList = document.getElementById("saveSection")
	var testedStore = localStorage.getItem('list')
	var divTag = document.createElement('div')
	divTag.innerHTML = testedStore
	console.log(testedStore)
	document.getElementById("saveSection").appendChild(divTag)
}
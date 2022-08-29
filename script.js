var addButton = document.getElementById("addButton");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.getElementsByTagName("li");
var deleteButton = document.getElementsByClassName("deleteButton");
var i = document.getElementsByTagName("i");
var secondSection = document.querySelector('.second-section');

function inputLength() {
	return input.value.length;
}


function deleteElement() {
	var h2 = document.querySelector("h2");
	if (li.length > 0){
		h2.parentNode.removeChild(h2);
		
	}
}

// for (let index = 0; index == li.length; index++) {
// 	if (li.length == 0){
// 		h2[index].remove();
// 	}
// }


function createListElement() {
	//add list
	var li = document.createElement("li");
	li.append(document.createTextNode(input.value));
	li.classList.add("item", "zone");
	li.addEventListener("click", crossOutListWhenClicked);
	ul.appendChild(li);
	input.value = ""; //resets the input field
	addDeleteButtonToList();
	deleteElement();

	function addDeleteButtonToList(){
		var button = document.createElement("deleteButton");
		var i = document.createElement("i");
		i.classList.add("fa-solid", "fa-trash-can");
		button.classList.add("deleteButton");
		button.appendChild(i);
		button.addEventListener('click', deleteListElement);
		li.appendChild(button);
	}
	
}

function deleteListElement(){
	var deletes = document.querySelectorAll('.deleteButton');
	// Iterate all nodes
	deletes.forEach(btn => {
		// Attach event listener. Note to preserve the button this-reference
		// by using the non-shorthand function
		btn.addEventListener('click', function() {
			var li = this.parentNode
			li.remove();
			EmptyList();
			
		})
	})
	
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}


function crossOutListWhenClicked(){
	var li = document.querySelectorAll("li");
	// for (let index = 0; index < li.length; index++) {
	// 	li[index].addEventListener("click", function(){
	li.forEach(x =>
		x.addEventListener("click", function(){
			x.classList.toggle('done');
		}))
	}

function EmptyList(){
	var h2 = document.createElement("h2");
	if (li.length == 0){
		secondSection.appendChild(h2);
		h2.append(document.createTextNode("Empty List"));
		console.log(h2);
	}
}

deleteListElement();
crossOutListWhenClicked();
addButton.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
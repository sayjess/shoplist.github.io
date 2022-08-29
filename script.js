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
	// Add a condition to see H2 exists
    if (h2 && li.length > 0){
        h2.parentNode.removeChild(h2);
    }
}


function createListElement() {
	//add list
	var li = document.createElement("li");
	li.append(document.createTextNode(input.value));
	li.classList.add("item", "zone");
	li.addEventListener("click", crossOutListWhenClicked);
	ul.appendChild(li);
	input.value = ""; //resets the input field
	addDeleteButtonToList();
	deleteElement(); //deletes h2 element when li.length > 0
	

	function addDeleteButtonToList(){
		var button = document.createElement("button");
        var i = document.createElement("i");
        i.classList.add("fa-solid", "fa-trash-can");
        button.classList.add("deleteButton");
        button.appendChild(i);
        // Call common function to attach ONE handler
        activateDeleteAction(button);
        li.appendChild(button);
    }   
	// 	var button = document.createElement("button");
	// 	var i = document.createElement("i");
	// 	i.classList.add("fa-solid", "fa-trash-can");
	// 	button.classList.add("deleteButton");
	// 	button.appendChild(i);
	// 	// console.log("deleteListElement function added");
	// 	button.addEventListener('click', deleteListElement);
	// 	// console.log("emptyList function added");
	// 	li.appendChild(button);
	// 	emptyList();
	// }
	
	
}

// New function. Common for 2 use cases:
// - for existing delete buttons, on page load
// - for newly added delete buttons, on user action
function activateDeleteAction(btn) {
    btn.addEventListener('click', function() {
        var li = this.parentNode;
        li.remove();
        emptyList();
    })
};

// Renamed this function:
function activateAllDeleteActions(){
    var deletes = document.querySelectorAll('.deleteButton');
    // Use other function to attach handler
    deletes.forEach(activateDeleteAction);
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
	li.forEach(x =>
		x.addEventListener("click", function(){
			x.classList.toggle('done');
		}))
	}



function emptyList(){	
	var h2 = document.createElement("h2");
	if (li.length == 0){
		secondSection.appendChild(h2);
		h2.append(document.createTextNode("Empty List"));
	}
}

emptyList();
activateAllDeleteActions();
crossOutListWhenClicked();
addButton.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
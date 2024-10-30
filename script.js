//your JS code here. If required.

var count = 0;

function addRow(){
	var title = document.getElementById('title');
	var author = document.getElementById('author');
	var isbn = document.getElementById('isbn');
	
	var titleValue = title.value;
	var authorValue =  author.value;
	var isbnValue = isbn.value;
	
	var table = document.getElementById('table');
	
	// Create an empty <tr> element and add it to the 1st position of the table:
	var row = table.insertRow(-1);
	
	// Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	var cell3 = row.insertCell(2);
	var cell4 = row.insertCell(3);

	// Add some text to the new cells:
	cell1.innerHTML = titleValue;
	cell2.innerHTML = authorValue;
	cell3.innerHTML = isbnValue;

	var btn = document.createElement('input');
	btn.type = "button";
	btn.className = "delete";
	btn.value = "X";
	btn.onClick= function() {deleteRow()};
	btn.style = "background-color: red; border: none; border-radius: 5px ;color: white";
	
	for(let i=count;i>count;i++){
		btn.id = count;
		count++;
	}
	
	cell4.appendChild(btn);
	}


function deleteRow(){
	document.getElementById("table").deleteRow(-1);
	}
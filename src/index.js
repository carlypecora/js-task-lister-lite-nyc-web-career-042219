document.addEventListener("DOMContentLoaded", () => {
var form = document.querySelector("#create-task-form");
var submitValue = document.querySelector("#new-task-description");
var rating = document.querySelector("#rating")
var tasks = document.querySelector('#tasks')

function ratingConversion(rating, task) {
	var ratingColor = rating.value;
	switch (ratingColor) {
		case 'red':
		task.style.color = rating.value;
		task.setAttribute("class", "1 foo")
		break;
		case 'yellow':
		task.style.color = rating.value;
		task.setAttribute("class", "2 foo")

		break;
		case 'green':
		task.style.color = rating.value;
		task.setAttribute("class", "3 foo")
		break;
	}
}

	function orderAndAppend(li){
		var classNum = li.classList[0]
		switch (classNum) {
			case '3':
			document.querySelector(".first").appendChild(li);
			break;
			case '2':
			document.querySelector(".second").appendChild(li);
			break;
			case '1':
			document.querySelector(".third").appendChild(li);
			break;

		}
	}


  form.addEventListener("submit", function(event){
  	event.preventDefault();
  	// debugger
  	var li = document.createElement("li");
  	li.innerText = submitValue.value;
  	li.setAttribute("class", "foo")
  	ratingConversion(rating, li)
  	orderAndAppend(li);
  	var deleteBtn = document.createElement("button");
  	deleteBtn.setAttribute("class", "deleteId");
  	deleteBtn.innerText = "*"
  	li.appendChild(deleteBtn)
  	ratingConversion(rating, li)
  	var lis = document.querySelectorAll(".foo")
  	form.reset();
  })

tasks.addEventListener("click", function(e){
	var del = document.querySelectorAll(".deleteId")
	for (var i = 0; i < del.length; i++){
		if (e.target === del[i]){
			e.target.parentElement.remove();
			}
		}
	})
});



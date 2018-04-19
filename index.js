var rtext = randText();
var arr = [];

function randText(params) {
	var r =  Math.round(Math.random() * (1000000000000000000));
	let rtext = r.toString(36);
	return rtext;
}

	function randomInteger(min, max) {
    var rand = min - 0.5 + Math.random() * (max - min + 1)
    rand = Math.round(rand);
    return rand;
  }

for (let i = 0; i < randomInteger(995, 1000); i++) {
	arr.push(randText());
}

document.body.innerHTML = "<input ><div class='count'></div> <ul class='list'> </ul><div class='content'></div><div class='chislo'></div>"

for (let k = 0; k < arr.length; k++) {
	var li = document.createElement('li');
	var parent = document.querySelector('.list')
	parent.appendChild(li).innerHTML = arr[k];
	li.addEventListener("click", _delitem)
}

function count() {
	var count = document.querySelector('.count')
	count.innerHTML = document.querySelector('.list').children.length-1
}

count()

function _delitem() {
	// this.style.opacity = 0;
	// this.style.height = 0;
	// count()
	// setTimeout(() => {
	// 	if (this.parentElement) {
	// 		this.parentElement.removeChild(this)
	// 	}
	// }, 1000);
}
document.querySelector('input').addEventListener("input", search)

function search() {
 var arrayLi = document.querySelector('.list').children;
 for (let j = 0; j < arrayLi.length; j++) {
	 var element = arrayLi[j];
	 var targetText = this.value;
	 var curentText = element.innerHTML;
	 targetText.length > curentText.length ? check(targetText, curentText, element) : check(curentText, targetText, element) 
	};
}

function check(t,c,e) {
	if (!(t.indexOf(c)+1)) {
		e.style.display = "none";
	} else {
	 e.style.display = "block";
	}
}

document.querySelector(".list").onclick = function (params) {
	console.log(params.currentTarget);
	
	console.log(params.target);
	
	if (params.target.hasAttribute("style")) {
		// console.log(params.target.getAttribute("style"));

		if (params.target.getAttribute("style") == "color: red;") {
			console.log(6);
			params.target.style.color = "black";
			
		} else {
			params.target.style.color = "red";
		}
	}
	
	
	
}

function tab(selector) {
	var arr = [1,2,3,4,5,6,7,8,9].sort(function(){return Math.random()-0.5})
	var table = "<table>";
	while(arr.length){
		table += `<tr><td>${arr.pop()}</td>`;
		table += `<td>${arr.pop()}</td>`;
		table += `<td>${arr.pop()}</td></tr>`;
	}
	table += "</table>";
	document.querySelector(selector).innerHTML = table;
}

tab(".content")


document.querySelector(".content").onclick = function (params) {
	// console.log(params.currentTarget);
	document.querySelector('.chislo').innerHTML = params.target.innerHTML;
	// console.log(params.target);
	
	// if (params.target.hasAttribute("style")) {
	// 	console.log(params.target.getAttribute("style"));

	// 	if (params.target.getAttribute("style") == "color: red;") {
	// 		console.log(6);
	// 		params.target.style.color = "inherit";
			
	// 	}
	// }
	
	params.target.style.color = "red";
	
}
console.log("CONNECTED");

var buttons = document.querySelectorAll("td");

for (var i = 0, length = buttons.length; i < length; i++)
{
	buttons[i].addEventListener("click", function(){
		if (this.innerHTML == ""){
			this.innerHTML = "X";
		}
		else if (this.innerHTML == "X"){
			this.innerHTML = "O";
		}
		else if (this.innerHTML == "O"){
			this.innerHTML = "";
		}
	});	
}
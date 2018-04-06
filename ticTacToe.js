console.log("CONNECTED");
//tictactoe for 2 human players

var buttons = document.querySelectorAll("td");
var lock = document.getElementById("lock");
var attach = new Array();

//only runs once at the beginning when code loads
for (var i = 0, length = buttons.length; i < length; i++)
	{ 
		console.log("forloop");
		//adds play function to each table cell, as well as parameter
		//that function is attached
		attach[i] = true;
		buttons[i].addEventListener("click", play);
	}

function play(){
	//for loop to ensure player only enters one icon (x or o)on the board
	//on each turn
	var count = 0;
	for (var i = 0, length = buttons.length; i < length; i++)
		{ 	
		//this will disable entering an icon for this table cell
       //if this cell you're clicking on is empty, but there's already another
       //icon in a cell not locked yet, it will increase the count so that you can't
       //enter anything in this cell
			if ((buttons[i].innerHTML != "" && attach[i]) && this.innerHTML == ""){
				count++; 
			}
		}
	//if other table cells are not filled or locked, then player can
	//enter an icon for this table cell
	if (count == 0){
		//allows player to pick between x or o or empty
		if (this.innerHTML == ""){
				this.innerHTML = "X";
			}
			else if (this.innerHTML == "X"){
				this.innerHTML = "O";
			}
			else if (this.innerHTML == "O"){
				this.innerHTML = "";
			}
	}
		
}
//this function locks all non-empty table cells by removing play function
lock.addEventListener("click", function(){
	for (var i = 0, length = buttons.length; i < length; i++){ 
			if (buttons[i].innerHTML != ""){
				attach[i] = false;
				buttons[i].removeEventListener("click", play);
				}
		}
	
});


//reset global variables to start game again

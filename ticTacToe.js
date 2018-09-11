console.log("CONNECTED");
//tictactoe with Computer Player

var buttons = document.querySelectorAll(".icons");
var lock = document.getElementById("lock");
var reset = document.getElementById("reset");
var attach = new Array();
var alternate; 
//only runs once at the beginning when code loads
start();
function start() {
for (var i = 0, length = buttons.length; i < length; i++)
	{ 
		
		//adds play function to each table cell, as well as parameter
		//that function is attached
		buttons[i].index = i;
		console.log(buttons[i].index);

		attach[i] = true;
		buttons[i].addEventListener("click", play);
		buttons[i].classList.add("pre-animation");
	}
}

function play(){
	//for loop to ensure player only enters one icon (x or o)on the board
	//on each turn
	for (var i = 0, length = buttons.length; i < length; i++){ 	
		//this will disable entering an icon for this table cell
       //if this cell you're clicking on is empty, but there's already another
       //icon in a cell not locked yet, it will increase the count so that you can't
       //enter anything in this cell
		if ((buttons[i].innerHTML != "" && attach[i]) && this.innerHTML == ""){		
			buttons[i].classList.add("pre-animation");
			buttons[i].innerHTML = "";
			buttons[i].classList.remove("transparent");
			//this.classList.add("pre-animation");
			//this.classList.remove("test");			
		}
	}
	//if other table cells are not filled or locked, then player can
	//enter an icon for this table cell	
	if (alternate == true){
		if (this.innerHTML == ""){
			this.innerHTML = "X";
			this.classList.remove("pre-animation");
			this.classList.add("transparent");
				
		}			
	}
	else {
		if (this.innerHTML == ""){
			this.innerHTML = "O";	
			this.classList.remove("pre-animation");
			this.classList.add("transparent");
		}
	}
}

//this function locks all non-empty table cells by removing play function
lock.addEventListener("click", function(){
	alternate = !alternate;
	console.log(alternate);
	for (var i = 0, length = buttons.length; i < length; i++){ 
			if (buttons[i].innerHTML != ""){
				attach[i] = false;
				buttons[i].classList.add("opaque");
				buttons[i].removeEventListener("click", play);
				}
		}
	 
});


//reset global variables to start game again
reset.addEventListener("click", function(){
	attach.length = 0; 
	console.log("clicked");
	
	for (var i = 0, length = buttons.length; i < length; i++){ 
		buttons[i].innerHTML = ""
		buttons[i].index = i;
		console.log(buttons[i].index);
		attach[i] = true;
		buttons[i].addEventListener("click", play);
		buttons[i].classList.add("pre-animation");
		buttons[i].classList.remove("transparent");
		buttons[i].classList.remove("opaque");
	}
	
});
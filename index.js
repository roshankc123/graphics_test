var positionx = 0;
var positiony = 0;
var box_countx = 0;
var box_county = 0;
var maxx,maxy;
var current_box = 0;
var total_box = 0;
var _refresh = setInterval(boxes,2);
function load(){
	maxx = Math.floor(window.innerWidth / 40);
	maxy = Math.floor(window.innerHeight / 40);
	console.log("total boxes: "+maxx +","+maxy)
	total_box = maxx * maxy;
}

function boxes(){
	if(box_countx%maxx == 0){
		console.log("Ok");
		positiony += 40;
		positionx = 0;
		box_county++;
		if(box_county >= maxy){
			clearInterval(_refresh);
			_refresh = setInterval(colorAll,2);
			return;
		}
	}
	var box = document.createElement("div");
	box.className = "box";
	box.innerHTML = String.fromCharCode((97 +Math.floor(( Math.random() * 26))));
	box.style.textAlign = "center";
	box.style.top = positiony+"px";
	box.style.left = positionx+"px";
	document.getElementById("bucket").appendChild(box);
	positionx += 40;
	box_countx++;
}

function colorAll(){
	var picker = Math.floor(Math.random()*255);
	document.getElementsByClassName("box")[current_box].style.backgroundColor = "rgba("+(2*picker)%255+","+picker+",400,0.4)";
	current_box = current_box + 1;
	if((current_box >= (total_box)) || !(document.getElementsByClassName("box")[current_box])){
		clearInterval(_refresh);
		current_box = 0;
		_refresh = setInterval(rotate,40);
	}
}

function rotate(){
	document.getElementsByClassName("box")[current_box].style.transform = "rotateY(180deg)";
	current_box = current_box + 1;
	if((current_box >= (total_box)) || !(document.getElementsByClassName("box")[current_box])){
		clearInterval(_refresh);
	}
}
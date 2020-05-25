var light = 0;
var time_wait = 1000;
var random = 0;
var temp = 0;

var dirt = 0;
var terrain = 0;
var water = 0;
var air = 0;

var oak_seed = 0;
var oak = 0;

function open_tab(evt, tab_name) { //tabs
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tab_name).style.display = "block";
    evt.currentTarget.className += " active";
}

function elements() {
	if(light >= 1) {
		random = Math.floor((Math.random() * 4) + 1);
		if(random == 1) {
			dirt++;
			document.getElementById("dirt").innerHTML = dirt;
		}
		else if(random == 2) {
			water++;
			document.getElementById("water").innerHTML = water;
		}
		else if(random == 3) {
			air++;
			document.getElementById("air").innerHTML = air;
		}
		else if(random == 4) {
			temp++;
			document.getElementById("temp").innerHTML = roundPrecised(temp, 2);
		}
		light--;
		document.getElementById("light").innerHTML = roundPrecised(light, 2);
	}
}


function roundPrecised(number, precision) { //rounding numbers
	var power = Math.pow(10, precision);
  	return Math.round(number * power) / power;
}

window.setInterval(function(){ //timer
	light=light+(1/(light+1));
	temp=temp-0.05;
	document.getElementById("light").innerHTML = roundPrecised(light, 2);
	document.getElementById("temp").innerHTML = roundPrecised(temp, 2);
}, time_wait);

function infobox(text) {
	document.getElementById("info_box").innerHTML = text;
}
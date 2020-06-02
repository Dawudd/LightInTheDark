var light = 0;
var random = 0;
var temp = 0;
var story=true;

var dirt = 0;
var terrain = 0;
var water = 0;
var air = 0;

var light_level=0;
var farming_level=1;

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
		}
		else if(random == 2) {
			water++;
		}
		else if(random == 3) {
			air++;
		}
		else if(random == 4) {
			temp++;
		}
		light--;
		reload();
	}
	else {
		infobox("Not enough light")
	}
}
function land() {
	if(dirt>=1 && water>=1 && air>=1) {
		dirt--;
		water--;
		air--;
		terrain++;
		reload();
		if(terrain==1) {
			document.getElementById("background").style.backgroundColor="#222222";
			infobox("Something's creating");
		}
		if(terrain==2) {
			document.getElementById("background").style.backgroundColor="#444444";
			infobox("Something's creating.");
		}
		if(terrain==3) {
			document.getElementById("background").style.backgroundColor="#666666";
			infobox("Something's creating..");
		}
		if(terrain==4) {
			document.getElementById("background").style.backgroundColor="#888888";
			infobox("Something's creating...");
		}
		if(terrain==5) {
			document.getElementById("background").style.backgroundColor="#AAAAAA";
			infobox("Something's creating....");
		}
		if(terrain==6) {
			document.getElementById("background").style.backgroundColor="#CCCCCC";
			infobox("Something's creating.....");
		}
		if(terrain==7) {
			document.getElementById("background").style.backgroundColor="#EEEEEE";
			infobox("Something's creating......");
		}
		if(terrain==8) {
			document.getElementById("background").style.backgroundColor="#FFFFFF";
			infobox("Darkness is no more");
		}
		if(terrain==9) {
			document.getElementById("background").style.backgroundColor="#000000";
			infobox("You're not lonely anymore");
			terrain=0;
			document.getElementById("lone").style.display="none";
			document.getElementById("planet").style.display="block";
			var i, tabcontent;
			tabcontent = document.getElementsByClassName("tabcontent");
			for (i = 0; i < tabcontent.length; i++) {
				tabcontent[i].style.display = "none";
			}
		}
	}
	else {
		if(dirt>0)
			dirt--;
		if(water>0)
			water--;
		if(air>0)
			air--;
		reload();
		infobox("Looks like you need each of them");
	}
}

function save() {
	localStorage.light = roundPrecised(light,2);
	localStorage.temp = roundPrecised(temp,2);
	localStorage.dirt = dirt;
	localStorage.water = water;
	localStorage.air = air;
}
function load() {
	light = Number(localStorage.light);
	temp = localStorage.temp;
	dirt = localStorage.dirt;
	water = localStorage.water;
	air = localStorage.air;
	reload();
}
function reload() {
	document.getElementById("light").innerHTML = roundPrecised(light, 2);
	document.getElementById("temp").innerHTML = Math.trunc(temp);
	document.getElementById("dirt").innerHTML = dirt;
	document.getElementById("water").innerHTML = water;
	document.getElementById("air").innerHTML = air;
}

function storynew() {
	story=true;
}
function storycheck() {
	story=false;
}

function roundPrecised(number, precision) { //rounding numbers
	var power = Math.pow(10, precision);
  	return Math.round(number * power) / power;
}

window.setInterval(function(){ //timer
	if(light_level==0)
		light=light+Math.pow(2,0)/(light+1);
	else if(light_level==1)
		light=light+Math.pow(2,5)/(light+1);
	temp=temp-0.05;
	document.getElementById("light").innerHTML = roundPrecised(light, 2);
	document.getElementById("temp").innerHTML = Math.trunc(temp);
	if(story==true) {
		document.getElementById("story").style.color="red";
	}
	else {
		document.getElementById("story").style.color="#555588";
	}
}, 1000);

function infobox(text) {
	document.getElementById("info_box").innerHTML = text;
}
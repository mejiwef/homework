var pictures = new Array("img/1.jpg", "img/2.jpg", "img/3.jpg", "img/4.jpg");
var n = 0;

window.onload = function() {
	document.getElementById("prev").onclick = function() {
		if(n == 0) {
			n = pictures.length - 1;
		} else {
			n--;
		}
		document.getElementById("thisimg").src = pictures[n];
	};
	document.getElementById("next").onclick = function() {
		if(n == pictures.length - 1) {
			n = 0;
		} else {
			n++;
		}
		document.getElementById("thisimg").src = pictures[n];
	};
};
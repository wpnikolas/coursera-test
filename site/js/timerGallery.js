(function Timer() {
  	setInterval(timerGallery, 8000);
})();

function timerGallery() {
  	x = (x === images.length - 1) ? 0 : x + 2;
  	y = (y === images.length - 2) ? 1 : y + 2;
  	decreaseOpacity();
  	setTimeout(changeImagea, 1500);
  	setTimeout(increaseOpacity, 4000);
  	setTimeout(changeImageb, 5500);
}

function changeImagea() {
	document.getElementById("img-a").src = images[x];
}

function changeImageb() {
	document.getElementById("img-b").src = images[y];
}

function increaseOpacity() {
	document.getElementById("img-a").style.opacity = 1;
}

function decreaseOpacity() {
	document.getElementById("img-a").style.opacity = 0;
}

var images = [], x = 0, y = 1;

images[0] = "img/1.jpg";
images[1] = "img/2.jpg";
images[2] = "img/3.jpg";
images[3] = "img/4.jpg";
images[4] = "img/5.jpg";
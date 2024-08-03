position = 0; // 0 left top, 1 right top , 2 right bottom , 3 left bottom
var speed = 1,
currentPosl = 0,
currentPost = 0;

function button() {
var elem = document.getElementById("button");
elem.classList.add("app");
elem.classList.add("changer");

elem.disabled = true;
var motionInterval = setInterval(function () {
if (position == 0) {
currentPosl += speed;
if (currentPosl >= window.innerWidth - 110) {
hideProperty(motionInterval);
position = 1;
}
}
if (position == 1) {
currentPost += speed;
if (currentPost >= window.innerHeight - 110) {
hideProperty(motionInterval);
position = 2;
}
}
if (position == 2) {
currentPosl -= speed;
if (currentPosl <= 0) {
hideProperty(motionInterval);
position = 3;
}
}
if (position == 3) {
currentPost -= speed;
if (currentPost <= 0) {
hideProperty(motionInterval);
position = 0;
}
}
// if (currentPosl >= 200 && speed > 0) {
// currentPosl = 200;
// speed = 1;
// elem.style.width = parseInt(elem.style.width) * 2 + "px";
// elem.style.height = parseInt(elem.style.height) * 2 + "px";
// }
elem.style.left = currentPosl + "px";
elem.style.top = currentPost + "px";
},
20);
}

function hideProperty(motionInterval) {
var elem = document.getElementById("button");
elem.classList.remove("changer");
elem.classList.remove("app");
elem.disabled = false;
clearInterval(motionInterval);
}
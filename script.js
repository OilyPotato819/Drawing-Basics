// Sunrise Assignment

let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 400;
cnv.height = 400;

let cloud = document.getElementById("cloud-img");

ctx.fillStyle = "blue";
ctx.fillRect(0, 0, 400, 300);

ctx.fillStyle = "red";
ctx.beginPath();
ctx.arc(200, 300, 30, 0, 2 * Math.PI);
ctx.fill();

ctx.fillStyle = "green";
ctx.fillRect(0, 300, 400, 100);

ctx.drawImage(cloud, 200, 300);

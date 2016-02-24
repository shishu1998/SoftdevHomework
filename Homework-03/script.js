var c = document.getElementById("Can");
var ctx = c.getContext("2d");
ctx.strokeRect(0,0,500,500);

var cbutton = document.getElementById("Bounce");
var img = new Image();
img.src = "ultraman.png";
var imgx;
var imgy;
var X;
var Y;
var frameid;

var drawI = function(){
    imgx = c.width/2 - 125;
    imgy = c.height/2-101;
    console.log(imgx + "," + imgy);
    X = 1;
    Y = 1;
    ctx.clearRect(0, 0, c.width, c.height);
    ctx.strokeRect(0,0,500,500);
    ctx.drawImage(img,imgx,imgy);
    imgx += X;
    imgy += Y;
    if(imgx == 125 || imgx == 375 || imgy == 101 || imgy == 399){
	X = -X;
	Y = -Y;
    }
    frameid = window.requestAnimationFrame(drawI);
};

cbutton.addEventListener("click",drawI);

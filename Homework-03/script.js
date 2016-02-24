var c = document.getElementById("Can");
var ctx = c.getContext("2d");
ctx.strokeRect(0,0,500,500);

var cbutton = document.getElementById("Bounce");
var img = new Image();
img.src = "ultraman.png";
var imgx = c.width/2 - 125;
var imgy = c.height/2 - 101;
var X = 1;
var Y = 1;
var frameid;

var drawI = function(){
    ctx.clearRect(0, 0, c.width, c.height);
    ctx.strokeRect(0,0,500,500);
    ctx.drawImage(img,imgx,imgy);
    imgx += X;
    imgy += Y;
    if(imgx == 0 || imgx == 250){
	X = -X;
    }
    if(imgy == 0|| imgy == 298){
	Y = -Y;
    }
    frameid = window.requestAnimationFrame(drawI);
};

cbutton.addEventListener("click",drawI);

var stop = function(){
    window.cancelAnimationFrame(frameid);
};

var sbutton = document.getElementById("stop");
sbutton.addEventListener("click",stop);

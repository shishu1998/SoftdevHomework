var c = document.getElementById("Can");
var ctx = c.getContext("2d");
ctx.strokeRect(0,0,500,500);
var xcor;
var ycor;


var draw = function(e){
    ctx.beginPath();
    ctx.arc(e.pageX,e.pageY,5,0,2*Math.PI);
    ctx.fillStyle = "#ff0000";
    ctx.fill();
    ctx.stroke();
    ctx.moveTo(e.pageX,e.pageY);
    ctx.lineTo(xcor,ycor);
    ctx.stroke();
    xcor = e.pageX;
    ycor = e.pageY;
}

c.addEventListener("click",draw);

var clear = function(e){
    ctx.clearRect(0,0,500,500);
    ctx.strokeRect(0,0,500,500);
    xcor = undefined;
    ycor = undefined;
}

var button = document.getElementById("clear");
button.addEventListener("click",clear);

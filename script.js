var c = document.getElementById("Can");
var ctx = c.getContext("2d");
ctx.strokeStyle = "#ff0000";
ctx.strokeRect(0,0,500,500);

var drawcircle = function(e){
    ctx.beginPath();
    var xcor = e.pageX;
    var ycor = e.pageY;
    ctx.arc(xcor,ycor,5,0,2*Math.PI);
    ctx.fillStyle = "#ff0000";
    ctx.fill();
    ctx.stroke();
}

c.addEventListener("click",drawcircle);

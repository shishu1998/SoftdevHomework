var pic = document.getElementById("vimg");
var mbutton = document.getElementById("Expand");
var sbutton = document.getElementById("Stop");
var cbutton = document.getElementById("Clear");
var add = 1;
var IntervalID;

var drawC = function(){
    var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    c.setAttribute("cx", 250);
    c.setAttribute("cy", 250);
    c.setAttribute("r", "1");
    c.setAttribute("fill", "red");
    c.setAttribute("stroke", "black");

    pic.appendChild(c);
};
var animate = function(){
    drawC();
    var c = document.getElementsByTagName("circle")[0];
    var r = parseInt(c.getAttribute("r"));
    var a = function(){
	var picheight = parseInt(pic.getAttribute("height"));
	if(r == 0 || r == picheight/2){ 
	    add = -add;
	}
	r += add;
	c.setAttribute("r",r);
    };
    IntervalID = window.setInterval(a,16);
    
};
var stop = function(){
    window.clearInterval(IntervalID);
};
var clear = function(){
    pic.removeChild(document.getElementsByTagName("circle")[0]);
}

mbutton.addEventListener("click",animate);
sbutton.addEventListener("click",stop);
cbutton.addEventListener("click",clear);

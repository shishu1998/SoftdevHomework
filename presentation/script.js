var slidenum = 0;
var head = ["<font size = '32'>Press Next to start the Presentation</font>","<font size = '32'>Brief History</font>","<font size = '32'>What are websockets?</font>","<font size = '32'>How do websockets work?</font>","<font size = '32'>Why websockets?</font>","<font size = '32'>TCP Connection Joke</font>","<font size = '32'>Applications of Websocket</font>","<font size = '32'>Disadvantages</font>","<font size = '36'>THE END</font>"];
var text = ["<font size = '18'>Information will appear here</font>","<font size = '20'>Before the invention of websockets, the internet was a boring place.There was no dynamic interaction between user and the web browser, and people only needed to send requests and get stuff done.However, with the introduction of AJAX, internet become more dynamic and there was the possibility of bidirectional communication.This communication wasn't truly in real time, so what can we ever do?</font>","<font size = '18'>A Websocket is a mean of two way communication for distribution between a server and a client. It allows an interactive communication session between a client and a server in real time. It does not need the overhead of a HTTP Protocol</font>","<font size = '18'>A Websocket connection is based on a TCP connection. It uses packets of bytes of data when sending messages and has a checksum to ensure that all parts of the package is received. Websocket connections starts off with a handshake which upgrades the http protocol to a websocket protocol. The client sends a standard HTTP get request that is read as an upgrade and creates a two way connection.<br><img src='handshake.PNG'></font>","<font size = '18'>Unlike Http, which requires two connections for bidirectional communication, websockets only require one. Websockets also don't take as long when creating the connection and are generally faster. They have much smaller headers(2-10 bytes) compared to HTTP's(200-2,000 bytes). Http connections also don't update in realtime and instead uses continuous polling(constantly asking server to see if there's new data) or long polling(asking over periods of time)</font>","<img src= 'TCP.PNG'>","<font size = '18'>Application of websockets include social media(facebook updates/msgs, twitter tweets), multiplayer games, weather and news updates, GPS software, and collaborative editing software.</font>","<font size = '18'>One thing to keep in mind before using websockets is whether you will continually use the connection or just use it once. Websockets do take up bandwidth.If you're only sending a few packages of data, it might be better to just use an HTTP connection. Websockets also don't have security measure like HTTP(same origin policy), the connection is open and susceptible to cyber attacks. Although it is possible to fix this issue with code, the process can be complicated and painstaking. There are also reported incidents where websocket connections are blocked by firewalls, though that shouldn't be the case since websockets generally use TCP port 80, which is especially made for websocket connections.</font>","<font size = '18'>There's nothing more to see here~~~</font>"];

var load = function(){
    d3.selectAll("h2")
	.html(head[slidenum])
    d3.selectAll("h3")
	.html(text[slidenum])
    n.style.position = "absolute";
    n.style.left = 650 + "px";
    n.style.top = 850 + "px";
    p.style.position = "absolute";
    p.style.left = 550 + "px";
    p.style.top = 850 + "px";
}

var prevslide = function(){
    if(slidenum > 0){
	slidenum --;
	load();
    }
}

var nextslide = function(){
    if(slidenum < 8){
	slidenum ++;
	load();
    }
}

window.addEventListener("load",load);
var n = document.getElementById("next");
var p = document.getElementById("prev");
n.addEventListener("click",nextslide);
p.addEventListener("click",prevslide);

var slidenum = 0;
var head = ["Press Next to start the Presentation","Brief History","What are websockets?","How do websockets work?","Why websockets?","TCP Connection Joke","Applications of Websocket","Disadvantages","THE END"];
var text = ["Information will appear here","Before the invention of websockets, the internet was a boring place.There was no dynamic interaction between user and the web browser, and people only needed to send requests and get stuff done.However, with the introduction of AJAX, internet become more dynamic and there was the possibility of bidirectional communication.This communication wasn't truly in real time, so what can we ever do?","A Websocket is a mean of two way communication for distribution between a server and a client. It allows an interactive communication session between a client and a server in real time. It does not need the overhead of a HTTP Protocol","A Websocket connection is based on a TCP connection. It uses packets of bytes of data when sending messages and has a checksum to ensure that all parts of the package is received. Websocket connections starts off with a handshake which upgrades the http protocol to a websocket protocol. The client sends a standard HTTP get request that is read as an upgrade and creates a two way connection.<br><img src='handshake.png'>","Unlike Http, which requires two connections for bidirectional communication, websockets only require one. Websockets also don't take as long when creating the connection and are generally faster. They have much smaller headers(2-10 bytes) compared to HTTP's(200-2,000 bytes). Http connections also don't update in realtime and instead uses continuous polling(constantly asking server to see if there's new data) or long polling(asking over periods of time)","<img src= 'TCP.png'>","Application of websockets include social media(facebook updates/msgs, twitter tweets), multiplayer games, weather and news updates, GPS software, and collaborative editing software.","One thing to keep in mind before using websockets is that websocket connections are persistent and they take up bandwidth.If you're only sending a few packages of data, it might be better to just use an HTTP connection. Websockets also don't have security measure like HTTP(same origin policy), the connection is open and susceptible to cyber attacks. Although it is possible to fix this issue with code, the process can be complicated and painstaking. There are also reported incidents where websocket connections are blocked by firewalls, though that generally doesn't happen.","There's nothing more to see here~~~"];

var load = function(){
    d3.selectAll("h2")
	.text(head[slidenum])
	.style("color","white")
    d3.selectAll("h3")
	.html(text[slidenum])
	.style("color","white")
    n.style.position = "absolute";
    n.style.left = window.innerWidth/2 + "px";
    n.style.top = window.innerHeight + "px";
    p.style.position = "absolute";
    p.style.left = window.innerWidth/2 - 100 + "px";
    p.style.top = window.innerHeight + "px";
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

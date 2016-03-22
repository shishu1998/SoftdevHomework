var states = ["Iowa", "New Hampshire", "South Carolina", "Nevada", "Alabama", "Alaska", "Arkansas", "Georgia", "Massachusetts", "Minnesota", "Oklahoma", "Tennessee", "Texas", "Vermont", "Virginia", "Colorado", "Kansas", "Kentucky", "Louisiana", "Maine", "Puerto Rico", "Hawaii", "Idaho", "Michigan", "Mississippi", "Virgin Islands", "Wyoming1", "Guam", "District of Columbia", "Florida", "Illinois", "Missouri", "North Carolina", "Northern Marianas", "Ohio", "American Samoa", "Arizona", "Utah", "North Dakota", "Wisconsin", "New York", "Connecticut", "Delaware", "Maryland", "Pennsylvania", "Rhode Island", "Indiana", "Nebraska", "West Virginia", "Oregon", "California", "Montana", "New Jersey", "New Mexico", "South Dakota","American Samoa","Arizona","Utah","North Dakota","Wisconsin","New York","Connecticut","Delaware","Maryland","Pennsylvania","Rhode Island","Indiana","Nebraska","West Virginia","Oregon","Washington","California","Montana","New Jersey","New Mexico","South Dakota"];
var delegates = ["30", "23", "50", "30", "50", "28", "40", "76", "42", "38", "43", "58", "155", "16", "49", "37", "40", "46", "46", "23", "23", "19", "32", "59", "40", "9", "29", "9", "19", "99", "69", "52", "72", "9", "66", "9", "58", "40", "28", "42", "95", "28", "16", "38", "71", "19", "57", "36", "34", "28", "44", "172", "27", "51", "24", "29","9","58","40","28","42","95","28","16","38","71","19","57","36","34","28","44","172","27","51","24","29"];
var colors = ["red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue"];

var Ddelegates = ["44", "24", "35", "53", "53", "6", "32", "66", "13", "102", "91", "77", "38", "67", "222", "16", "95", "51", "25", "33", "25", "36", "130", "6", "214", "156", "71", "107", "143", "75", "23", "33", "16", "25", "101", "86", "14", "247", "95", "55", "21", "189", "24", "83", "7", "29", "55", "61", "7", "60","21", "126", "18", "34", "20", "20","40", "9", "29", "9", "19", "99", "69", "52", "72", "9", "66", "9", "58", "40", "28", "42", "95", "28", "16", "38"];
var Dcolors = ["red","red","red","red","red","blue","red","red","blue","red","red","red","red","red","red","red","red","red","red","red","red","red","red","blue","red","red","red","red","red","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue"];

var side = true;

var load = function(){
    d3.select(".chart")
	.selectAll("div")
	.data(states)
	.enter().append("div")
	.text(function(d){
	    return d;
	});

    d3.select(".chart")
	.selectAll("div")
	.data(delegates)
	.append("div")
	.attr("class","bar")
	.style("width",function(d){
	    return scale(d) + "px";
	})
	.append("text")
	.style("color","white")
	.text(function(d){
	    return d + " Delegates";
	});
    d3.select(".chart")
	.selectAll(".bar")
	.data(colors)
	.style("background-color",function(d){
	    return d;
	});
};
window.addEventListener("load",load);

var scale = d3.scale.linear()
    .domain([0,d3.max(delegates)])
    .range([0,420])


var change = function(){
    side = !side;
    if(side){
	d3.selectAll("h1")
	    .text("Republican Party Delegates")
	d3.selectAll("h2")
	    .text("Total Delegates:2472 Allotted:1408 Not Allotted:1064")
	d3.selectAll(".bar")
	    .data(delegates).transition().duration(2000)
	    .style("width", function(d){
		return scale(d) + "px";
	    })
	    .text(function(d){
		return d + " Delegates";
	    })
	    .style("color","white");
	d3.selectAll(".bar")
	    .data(colors)
	    .style("background-color",function(d){
		return d;
	    });
    }
    if(!side){
	d3.selectAll("h1")
	    .text("Democratic Party Delegates")
	d3.selectAll("h2")
	    .text("Total Delegates:4501 Allotted:1932 Not Allotted:2569")
	d3.selectAll(".bar")
	    .data(Ddelegates).transition().duration(2000)
	    .style("width",function(d){
		return scale(d) + "px";
	    })
	    .text(function(d){
		return d + " Delegates";
	    })
	    .style("color","white");
	d3.selectAll(".bar")
	    .data(Dcolors)
	    .style("background-color",function(d){
		return d;
	    });
    }
};
window.addEventListener("click",change);

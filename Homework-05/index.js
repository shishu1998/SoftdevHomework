
//Data taken from Alvin 
var states = ["Iowa", "New Hampshire", "South Carolina", "Nevada", "Alabama", "Alaska", "Arkansas", "Georgia", "Massachusetts", "Minnesota", "Oklahoma", "Tennessee", "Texas", "Vermont", "Virginia", "Colorado", "Kansas", "Kentucky", "Louisiana", "Maine", "Puerto Rico", "Hawaii", "Idaho", "Michigan", "Mississippi", "Virgin Islands", "Wyoming1", "Guam", "District of Columbia", "Florida", "Illinois", "Missouri", "North Carolina", "Northern Marianas", "Ohio", "American Samoa", "Arizona", "Utah", "North Dakota", "Wisconsin", "New York", "Connecticut", "Delaware", "Maryland", "Pennsylvania", "Rhode Island", "Indiana", "Nebraska", "West Virginia", "Oregon", "Washington", "California", "Montana", "New Jersey", "New Mexico", "South Dakota","American Samoa","Arizona","Utah","North Dakota","Wisconsin","New York","Connecticut","Delaware","Maryland","Pennsylvania","Rhode Island","Indiana","Nebraska","West Virginia","Oregon","Washington","California","Montana","New Jersey","New Mexico","South Dakota"];
var delegates = ["30", "23", "50", "30", "50", "28", "40", "76", "42", "38", "43", "58", "155", "16", "49", "37", "40", "46", "46", "23", "23", "19", "32", "59", "40", "9", "29", "9", "19", "99", "69", "52", "72", "9", "66", "9", "58", "40", "28", "42", "95", "28", "16", "38", "71", "19", "57", "36", "34", "28", "44", "172", "27", "51", "24", "29","9","58","40","28","42","95","28","16","38","71","19","57","36","34","28","44","172","27","51","24","29"];
var colors = ["red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","red","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue","blue"];

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
	    return d + "px";
	})
	.append("text")
	.text(function(d){
	    return d + "Delegates";
	});
};
window.addEventListener("load",load);

alert("Hello");
  
var colors = ["rgb(255, 0, 0)","rgb(255, 255, 0)","rgb(0, 255, 0)""rgb(0, 255, 255)""rgb(0, 0, 255)""rgb(255, 0, 255)"]
var square = document.querySelectorAll(".square");
for(var i=0;i<square.length;i++)
{
	square[i].style.backgroundColor=colors[i];
}

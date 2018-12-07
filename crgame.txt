
var colors = generaterandomcolor(6);
var square = document.querySelectorAll(".square");
var display=document.querySelector("#disp");
var message=document.querySelector("#message");
var h1=document.querySelector("h1");
var reset=document.querySelector("#reset");
var easy=document.querySelector("#easy")
var hard=document.querySelector("#hard")
var numsquares=6;
easy.addEventListener("click",function(){
	hard.classList.remove("selected");
	easy.classList.add("selected");
	hard.classList.remove("white");
	easy.classList.add("white");
	numsquares=3;
	colors=generaterandomcolor(numsquares);
	pick=pickcolor();
	for(var i=0;i<square.length;i++)
	{
		if(colors[i])
		{
			square[i].style.backgroundColor=colors[i];
		}
		else
		{
			square[i].style.display="none";
		}
	}

});
hard.addEventListener("click",function(){
	easy.classList.remove("selected");
	hard.classList.add("selected");
	easy.classList.remove("white");
	hard.classList.add("white");
	numsquares=6;
	colors=generaterandomcolor(numsquares);
	pick=pickcolor();
	for(var i=0;i<square.length;i++)
	{
		
		
			square[i].style.backgroundColor=colors[i];
		
			square[i].style.display="block";
		
	}

});
reset.addEventListener("click",function(){

	message.textContent="";
	colors=generaterandomcolor(numsquares);
	pick=pickcolor();
	display.textContent=pick;
	for(var i=0;i<square.length;i++)
	{
		square[i].style.backgroundColor=colors[i];
	}
	h1.style.backgroundColor="steelblue";
});


var pick=pickcolor();
display.textContent=pick;
for(var i=0;i<square.length;i++)
{
	square[i].style.backgroundColor=colors[i];
	square[i].addEventListener("click",function(){
		var click=this.style.backgroundColor;
		if(click==pick)
		{
			message.textContent="Correct";
			changecolor(click);
			h1.style.backgroundColor=pick;
			reset.textContent="Play again?";

		}
		else
		{
			this.style.backgroundColor="#232323";
			message.textContent="Try Again ";
		}
	});

}
function changecolor(color)
{
	for(var i=0;i<square.length;i++)
	{
		square[i].style.backgroundColor=color;
	}
}
function pickcolor()
{
	var random=Math.floor(Math.random()*colors.length);
	return colors[random];
}
function generaterandomcolor(num)
{
	var arr=[];
	for(var i=0;i<num;i++)
	{
		arr.push(randomcolor());

	}
	return arr;
}
function randomcolor()
{
		var r=Math.floor(Math.random()*256);
		var g=Math.floor(Math.random()*256);
		var b=Math.floor(Math.random()*256);
		return "rgb(" + r + ", " + g + ", " + b + ")";

}
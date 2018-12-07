var p1=document.querySelector("#p1");
var p2=document.querySelector("#p2");
var s1=0;
var s2=0;
var game=false;
var win=5;
var res=document.querySelector("#res");
var h1=document.querySelector("h1");
var dis1=document.querySelector("#dis1");
var dis2=document.querySelector("#dis2");
var input=document.querySelector("input");
var target=document.querySelector("#tar");


p1.addEventListener("click",function(){
	if(!game){
		s1++;
		if(win==s1){
			//alert("game over");
			dis1.classList.add("winner");
			game=true;
		}
		dis1.textContent=s1;
	}
	
});
p2.addEventListener("click",function(){
	if(!game){
		s2++;
		if(win==s2)
		{
			dis2.classList.add("winner");
			game=true;
		}
		dis2.textContent=s2;	
	}
	
});
res.addEventListener("click",function(){
	s1=0;
	s2=0;
	game=false;
	dis1.textContent=0;
	dis2.textContent=0;
	dis1.classList.remove("winner");
	dis2.classList.remove("winner");
});
input.addEventListener("change",function(){
	target.textContent=input.value;
	win=input.value;
})
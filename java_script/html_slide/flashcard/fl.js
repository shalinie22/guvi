function down()
{    
	var td=document.createElement("td");
    var div1=document.createElement("div");
    td.appendChild(div1);
    document.getElementById("arrange").appendChild(td);
div1.style.width="272px";
div1.style.height="151px";
div1.style.border="outset"
div1.style.background="white";	
var p1=document.createElement("p");
var p=document.createElement("p");

var p2=document.createElement("p");
p2.innerHTML="Show/Hide Answer"
p2.onclick=function(){
getans()
};
var but=document.createElement("button");
but.innerHTML="EDIT";
but.style.color="blue";
but.style.position="relative";
but.style.top="25px";
but.onclick=function(){
	edit()
};
var but1=document.createElement("button");
but1.innerHTML="DELETE";
but1.style.color="blue";
but1.style.position="relative";
but1.style.top="25px";
but1.style.left="65px";
but1.onclick=function(){
	remove()
};
div1.appendChild(p);
div1.appendChild(p1);
div1.appendChild(p2);
div1.appendChild(but);
div1.appendChild(but1);
	
		p.innerHTML=document.getElementById("q").value;
		document.getElementById("q").value="";
		var an= document.getElementById("ans").value;
		document.getElementById("ans").value="";
		function getans(){
	p2.innerHTML=an;

}
function remove(){
	div1.remove();
}
function edit(){
	document.getElementById("q").value=p.innerHTML;
	document.getElementById("ans").value=an;
	var eb=document.createElement("button");
	eb.innerHTML="edit"
	document.getElementById("ebut").appendChild(eb);
	eb.onclick=function(){
		edi()
	}
	function to_hide() {
		document.getElementById("qb").style.display = "none";
	}
function edi()
{
	var a=document.getElementById("q").value;
	var b=document.getElementById("ans").value;
	p.innerHTML=a;
	p2.innerHTML=b;
	document.getElementById("q").value="";
	document.getElementById("ans").value="";
	eb.remove();
}
}
}

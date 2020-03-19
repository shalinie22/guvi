var div=document.createElement("div");
document.getElementById("a2").appendChild(div);
var but=document.createElement("button");
document.getElementById("a2").appendChild(but);
but.innerHTML="Clear Items";
but.id="b2";
but.style= "color:black;width:400px;height:50px;border-radius:7px;box-sizing:border-box;border:3px solid #4682B4;"
but.onclick=function()
{
  clear()
};
function myfunc(){
  var p=document.createElement("p");
  div.appendChild(p);
  p.innerHTML=document.getElementById("inputId").value;
}
function clear(){
  div.remove();
}
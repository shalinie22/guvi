<!DOCTYPE html>
<html>
<head>
<title>Create a div and change the color onmouse over</title>
</head>
<body>
<script src ="shal.js"></script>
hai;
</body>
</html>
////shal.js
var a=document.createElement("div");
a.id="img";
a.style.color="red";
var t=document.createTextNode("To Change the color of the content");
a.appendChild(t);
document.body.appendChild(a);
document.getElementById("img").onmouseover=function(){
mouseover()
};
function mouseover(){
document.getElementById("img").style.color="blue";
}

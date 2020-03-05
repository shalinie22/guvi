document.getElementById("sw").addEventListener("onclick", onclick);
function swaping()
{
    var s=document.getElementById("x");
    var t=document.getElementById("y");
    var i=s.innerHTML;
    var j=t.innerHTML;
    s.innerHTML=j;
    t.innerHTML=i;
}

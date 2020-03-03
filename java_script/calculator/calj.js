document.getElementById("1").addEventListener("click", p);
document.getElementById("2").addEventListener("click", p);
document.getElementById("3").addEventListener("click", p);
document.getElementById("4").addEventListener("click", p);
document.getElementById("5").addEventListener("click", p);
document.getElementById("6").addEventListener("click", p);
document.getElementById("7").addEventListener("click", p);
document.getElementById("8").addEventListener("click", p);
document.getElementById("9").addEventListener("click", p);
document.getElementById("0").addEventListener("click", p);
document.getElementById("*").addEventListener("click", p);
document.getElementById("/").addEventListener("click", p);
document.getElementById("+").addEventListener("click", p);
document.getElementById("-").addEventListener("click", p);
document.getElementById("c").addEventListener("click", clear);
document.getElementById("=").addEventListener("click", result);

function p(){
    var val=this.value;
    document.getElementById("ans").value+=val;
}

function result(){
    let x = document.getElementById("ans").value;
    let y = eval(x);
    document.getElementById("ans").value=y;
}

function clear(){
    document.getElementById("ans").value="";
}


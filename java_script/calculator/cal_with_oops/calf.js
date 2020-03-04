class calci{

    p(val){
    document.getElementById("sh").value+=val;
}

    result(){
    let x = document.getElementById("sh").value;
    let y = eval(x);
    document.getElementById("sh").value=y;
}

    clear(){
    document.getElementById("sh").value="";
}
}
var a = new calci();

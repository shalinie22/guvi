function add() {
    var tot = document.getElementById("budget").value;
    document.getElementById("b").innerHTML = "$ " + tot;

    var sum = p.reduce(function(a, b) {
        return parseInt(a) + parseInt(b);
    }, 0);

    document.getElementById("c").innerHTML = "$ " + sum;
    var bal = parseInt(tot) - sum;
    document.getElementById("d").innerHTML = "$ " + bal;

}
const p = [];
function newElement() {
    var li = document.createElement("li");
    var item = document.getElementById("t").value;
    var t1 = document.createTextNode(item);
    li.appendChild(t1);

    {
        document.getElementById("et").appendChild(li);
    }
    var li = document.createElement("li");
    var cost = document.getElementById("price").value;
    p.push(cost);
    var t2 = document.createTextNode(cost);
    li.appendChild(t2);
     {
        document.getElementById("ea").appendChild(li);
    }
    /*document.getElementById("tt").style.display="";
    var li = document.createElement("li");
    var pro = document.getElementById("tt").value;
    w.push(productprice);
    var t3 = document.createTextNode(pro);
    li.appendChild(t3);
     {
        document.getElementById("tt").appendChild(li);
        document.getElementById("tt").style.display=li;
    }*/

}

for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        console.log("Delete Task...");

        var listItem = this.parentNode;
        var ul = listItem.parentNode;
        ul.removeChild(listItem);

    }
}
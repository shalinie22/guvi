//to sheck whether the 3 sides form a triangle 
const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

const a = [];

inp.on("line", (data) => {
	a.push(data);
});

inp.on("close", () => {
    var x=a[0].split(" ");
    var b=parseInt(x[0]);
    var c=parseInt(x[1]);
    var d=parseInt(x[2]);
    if((b+c)<=d || (c+d)<=b || (b+d)<=c)
    {
        console.log("no");
    }
    else
    {
        console.log("yes");
    }
});

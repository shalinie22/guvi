const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

const w = [];

inp.on("line", (data) => {
	w.push(data);
});

inp.on("close", () => {
	var s=w[0].split(" ");
    var a=parseInt(s[0]);
    var b=parseInt(s[1]);
    var c=parseInt(s[2]);
    if(a!=b && b!=c && c!=a)
    {
        console.log("yes");
    }
    else
    {
        console.log("no");
    }
    
});

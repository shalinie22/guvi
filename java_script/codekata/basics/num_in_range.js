const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

const w = [];

inp.on("line", (data) => {
	w.push(data);
});

inp.on("close", () => {
	var n=parseInt(w[0].split(" "));
	var a=w[1].split(" ");
	var b=parseInt(a[0]);
	var c=parseInt(a[1]);
	if(n>=b && n<=c)
	{
	    console.log("yes");
	}
	else
	{
	    console.log("no");
	}
});

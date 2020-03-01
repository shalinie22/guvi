const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

const w = [];

inp.on("line", (data) => {
	w.push(data);
});

inp.on("close", () => {
	var n=w[0].split(" ");
	var a=parseInt(n[0]);
	var b=parseInt(n[1]);
	var s=w[1].split(" ");
	var c=parseInt(s[0]);
	var d=parseInt(s[1]);
	var t=w[2].split(" ");
	var e=parseInt(t[0]);
	var f=parseInt(t[1]);
	var u=w[3].split(" ");
	var g=parseInt(u[0]);
	var h=parseInt(u[1]);
	var i=a+c+e+g;
	var j=b+d+f+h;
	if(i==j)
	{
	    console.log("yes");
	}
	else
	{
	    console.log("no");
	}
});

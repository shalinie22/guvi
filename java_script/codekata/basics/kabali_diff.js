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
	console.log(b-a);
});

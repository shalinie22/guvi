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
	var a=s.sort();
	console.log(a[0]);
});

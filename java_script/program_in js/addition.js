const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

const at = [];

inp.on("line", (data) => {
	at.push(data);
});

inp.on("close", () => {
	var a=at[0],b=at[1];
  	var c=parseInt(a)+parseInt(b);
	console.log(parseInt(c));
});

//to find the bitwise not of a given number
const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

inp.on("line", (d) => {
	console.log(~d);
});

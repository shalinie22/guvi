#to find the cube of a number
const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});

inp.on("line", (data) => {
	console.log(parseInt(data)**3)
});

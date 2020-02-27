#Print "Y" if its a leap year and "N" if its a common year.
const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

inp.on("line", (y) => {
	if(y%4==0)
		console.log("Y");
	else
		console.log("N")
});

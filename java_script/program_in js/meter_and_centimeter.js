to calculate the meter and centimeter
const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

inp.on("line", (kms) => {
	m=kms*1000;
	console.log(m);
	c=kms*100000;
	console.log(c);
});

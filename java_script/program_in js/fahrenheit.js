const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
inp.on("line", (data) => {
  var f=(parseInt(data)*1.8+32).toFixed(2);
	console.log(f);
});

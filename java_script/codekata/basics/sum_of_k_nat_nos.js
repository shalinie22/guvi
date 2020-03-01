const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

inp.on("line", (d) => {
    var s=0;
    for(var i=1;i<=d;i++)
    {
        s+=i;
    }
	console.log(s);
});

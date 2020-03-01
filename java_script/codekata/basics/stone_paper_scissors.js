// stone paper scissors
const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

const a = [];

inp.on("line", (data) => {
	a.push(data);
});

inp.on("close", () => {
    var s=a[0].split(" ");
    var c=s[0];
    var b=s[1];
    if(c=='R' && b=='P')
    {
        console.log('P');
    }
    else if (c=='R' && b=='S')
    {
        console.log('R');
    }
    else if(c=='S' && b=='P')
    {
        console.log('S');
    }
    else
    {
        console.log('D');
    }
});

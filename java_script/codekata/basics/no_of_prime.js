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
    var f=parseInt(s[0]);
    var d=parseInt(s[1]);
    var c=0;
    for (var i=f;i<d;i++)
    {
        if(i>1)
        {
            for (var j=0;j<=i;j++)
            {
                if(i%j==0 && j!=i)
                {
                    break;
                }
                else
                {
                    c+=1;
                }
            }
        }
    }
    console.log(parseInt(c/2));
});


const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});
const a=[];
inp.on("line", (data) => {
  a.push(data);
});
inp.on("close",()=>{
    var b=a[0].split(" ");
    var k=parseInt(b[1]);
    var e=a[1].split(" ");
    var s=0;
    var c=0;
    for(var i=0;i<e.length;i++)
    {
        if(k==e[i])
        {
            s+=1;
            c=1;
        }
    }
    if(c==0)
    {
        console.log("-1");
    }
    else
    {
        console.log(s-1);
    }
});

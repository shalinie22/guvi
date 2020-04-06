const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});
const a=[];
inp.on("line", (data) => {
  a.push(data);
});
inp.on("close",()=>{
    var b=a[0].split("");
    if(parseInt(a[0])>0)
    {
        var d=parseInt(b[b.length-1])+parseInt(b[b.length-2])
    }
    else
    {
        var  d= parseInt(b[b.length-1])+parseInt(b[0]);
    }
    if(d%4==0)
    {
     console.log("yes");
    }
    else
    {
        console.log("no");
    }
    
});

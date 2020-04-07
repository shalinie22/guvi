
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});
const a=[];
inp.on("line", (data) => {
  a.push(data);
});
inp.on("close",()=>{
    var b=parseInt(a[0]);
    var g=a[0].split("");
    var f=[];
    var s=1;
    if(g.length==1)
    {
        console.log("10");
    }
    else
    {
        var p=g[0].split("");
        console.log((parseInt(p[0])+1)*10);
    }
})

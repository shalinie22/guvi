const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});
const a=[];
inp.on("line", (data) => {
  a.push(data);
});
inp.on("close",()=>{
    //var b=parseInt(a[0]);
    var e=a[0].split("");
    var s=0;
    var p;
    for(var i=0;i<e.length;i++)
    {
        p=parseInt(e[i])*parseInt(e[i]);
        s+=p;
    }
    console.log(s);
})

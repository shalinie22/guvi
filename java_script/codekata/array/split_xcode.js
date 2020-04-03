const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});
const a=[];
inp.on("line", (data) => {
  a.push(data);
});
inp.on("close",()=>{
    var c=a[0].split("");
    var s='';
    for(var i=0;i<c.length;i+=2)
    {
        s+=c[i];
    }
    s+=" ";
    for(var i=1;i<c.length;i+=2)
    {
        s+=c[i];
    }
    console.log(s);
});


const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});
const a=[];
inp.on("line", (data) => {
 a.push(data);
});
inp.on("close",()=>{
    var b=a[0].split(""),v=[];
    for(var i=0;i<b.length;i+=2)
    {
        var e=b[i+1];
        var t=b[i];
        v.push(e);
        v.push(t);
    }
    console.log(v.join(""));
})

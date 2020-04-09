const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});
const a=[];
inp.on("line", (data) => {
 a.push(data);
});
inp.on("close",()=>{
    var b=a[1].split(" "),v=[];
    if(b.length%2!=0)
    {
    for(var i=0;i<b.length-1;i+=2)
    {
        var e=b[i+1];
        var t=b[i];
        v.push(e);
        v.push(t);
    }
    console.log(v.join(" "),b[b.length-1]);
    }
    else
    {
        for(var i=0;i<b.length;i+=2)
    {
        var e=b[i+1];
        var t=b[i];
        v.push(e);
        v.push(t);
    }
    console.log(v.join(" "));
    }
    
})

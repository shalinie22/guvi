
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});
const a=[];

inp.on("line", (data) => {
  a.push(data);
});
inp.on("close",()=>{
    var b=a[1].split(" "),s=0;
    for(var i=0;i<b.length-1;i++)
    {
        var f=parseInt(b[i]);
        var se=parseInt(b[i+1]);
        var sw=f+se;
        s+=sw;
    }
    console.log(s);
})

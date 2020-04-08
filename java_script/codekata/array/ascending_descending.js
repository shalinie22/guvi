
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});
const a=[];
inp.on("line", (data) => {
 a.push(data);
});
inp.on("close",()=>{
     var b=a[1].split(" "),d=[],p=[],c=0;
     var f=a[2].split(" ");
    for(var i=0;i<f.length;i++)
    {
        for(var j=i+1;j<f.length;j++)
        {
            if(parseInt(f[i])<parseInt(f[j])){
            var t=parseInt(f[i]);
            f[i]=parseInt(f[j]);
            f[j]=t;}
        }
        d.push(f[i]);
    }
    for(var i=0;i<b.length;i++)
    {
        for(var j=i+1;j<b.length;j++)
        {
            if(parseInt(b[i])>parseInt(b[j])){
            var t=parseInt(b[i]);
            b[i]=parseInt(b[j]);
            b[j]=t;}
        }
        p.push(b[i]);
    }
    var r=[...p,...d];
    console.log(r.join(" "));
})

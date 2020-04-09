const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});
const a=[];
inp.on("line", (data) => {
 a.push(data);
});
inp.on("close",()=>{
    var f=a[1].split(" "),d=[];
    for(var i=0;i<f.length;i++)
    {
        for(var j=i+1;j<f.length;j++)
        {
            if(parseInt(f[i])>parseInt(f[j])){
            var t=parseInt(f[i]);
            f[i]=parseInt(f[j]);
            f[j]=t;}
        }
        d.push(f[i]);
    }
    console.log(d.join(" "))
})

const readline=require('readline');
const inp=readline.createInterface({
    input:process.stdin
});
const a=[];
inp.on("line",(data)=>{
    a.push(data);
});
inp.on("close",()=>{
    var b=a[0].split("");
    var n=0;
    for(var i=0;i<b.length;i++)
    {
        var s=parseInt(b[i])*parseInt(b[i]);
        n+=s;
    }
    console.log(n);
});

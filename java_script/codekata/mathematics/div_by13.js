const readline=require('readline');
const inp=readline.createInterface({
    input:process.stdin
});
const a=[];
inp.on("line",(data)=>{
    a.push(data);
});
inp.on("close",()=>{
    var d=parseInt(a[0]);
    var b=a[0].split("");
    if(d%13==0)
    {
        console.log("yes");
    }
    else
    {
        console.log("no");
    }
        
});

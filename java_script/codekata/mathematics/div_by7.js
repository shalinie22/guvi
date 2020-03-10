const readline=require('readline');
const inp=readline.createInterface({
    input:process.stdin
});
const a=[];
inp.on("line",(data)=>{
    a.push(data);
});
inp.on("close",()=>{
    var el=parseInt(a[0]);
    var n=0;
    if(el%7==0)
    {
        console.log("yes");
    }
    else
    {
        console.log("not");
    }
});

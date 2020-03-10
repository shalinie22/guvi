const readline=require('readline');
const inp=readline.createInterface({
    input:process.stdin
});
const a=[];
inp.on("line",(data)=>{
    a.push(data);
});
inp.on("close",()=>{
    var el=a[0].split("");
    var n=0;
    for(var i=0;i<el.length;i++)
    {
        d=parseInt(el[i]);
        n+=d;
    }
    if(n%3==0)
    {
        console.log("yes");
    }
    else
    {
        console.log("not");
    }
    
});

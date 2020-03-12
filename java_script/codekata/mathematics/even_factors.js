//print the even factors of N.If the even factor does not exists for N print '-1'.
const readline=require('readline');
const inp=readline.createInterface({input:process.stdin});
const a=[];
inp.on("line",(data)=>{
    a.push(data);
});
inp.on("close",()=>{
    var b=parseInt(a[0]);
    var s=[];
    
    for(var i=2;i<=b;i+=2)
    {
    if(b%i==0)
    {
        s.push(i);
        
    }
    }
    
    if(s.length>0)
    {
        console.log(s.join(" "));
    }
    else
    {
        console.log("-1");
    }
    
});

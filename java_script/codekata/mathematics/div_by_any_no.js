//check if N is divisible by any number less than N (ie.,it leaves no remainder)except 1.
const readline=require('readline');
const inp=readline.createInterface({input:process.stdin});
const a=[];
inp.on("line",(data)=>{
    a.push(data);
});
inp.on("close",()=>{
    var b=parseInt(a[0]);
    var c=1;
    for(var i=2;i<b;i++)
    {
        if(b%i==0)
        {
            c=0;
            console.log("yes");
            break;
        }
    }
    if(c==1)
    {
        console.log("no");
    }
});

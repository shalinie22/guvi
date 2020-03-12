const readline=require('readline');
const inp=readline.createInterface({input:process.stdin});
const a=[];
inp.on("line",(data)=>{
    a.push(data);
});
inp.on("close",()=>{
    var b=parseInt(a[0]);
    if(b%11==0)
    {
        console.log("YES");
    }
    else
    {
        console.log("NO");
    }
})

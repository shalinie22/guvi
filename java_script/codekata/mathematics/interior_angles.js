const readline=require('readline');
const inp=readline.createInterface({input:process.stdin});
const a=[];
inp.on("line",(data)=>{
    a.push(data);
});
inp.on("close",()=>{
    var b=a[0].split(" ");
    if((parseInt(b[0])+parseInt(b[1])+parseInt(b[2]))===180)
    {
        console.log("yes");
    }
    else
    {
        console.log("no");
    }
});

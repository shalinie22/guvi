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
    var f=[...new Set(el)]
    if(f.length==2)
    {
       console.log("Saturated"); 
    }
    else {
        console.log("Unsaturated");
    }
});

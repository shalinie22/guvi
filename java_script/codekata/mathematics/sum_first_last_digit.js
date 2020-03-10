//sum of the first and the last digit
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
    var f=parseInt(b[0]);
    var l=parseInt(b[b.length-1]);
    console.log(f+l);
    
});

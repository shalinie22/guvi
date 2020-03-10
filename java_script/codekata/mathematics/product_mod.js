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
    var b=a[0].split(" ");
    var p=parseInt(b[0])*parseInt(b[1]);
    console.log(p%parseInt(b[2]));
        
});

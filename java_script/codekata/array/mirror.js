const readline=require('readline');
const inp=readline.createInterface({input:process.stdin});
const a=[];
inp.on("line",(data)=>{
    a.push(data);
});
inp.on("close",()=>{
    var b=a[1].split(" ");
    var n=a[2].split(" ");
    var r=n.reverse();
    if(b.join(" ")==r.join(" ")){
        console.log("yes");
    }
    else
    {
        console.log("no");
    }
});

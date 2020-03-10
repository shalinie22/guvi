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
    var b=a[1].split(" ");
    var temp =parseInt(b[0]);
    for(var i=0;i<b.length;i++)
    {
        if(temp>parseInt(b[i]))
        {
            temp=parseInt(b[i]);
        }
    }
    console.log(temp);
});

//to print the sum of the numbers in the given number plate 
const readline=require('readline');
const inp=readline.createInterface({
    input:process.stdin
});
const a=[];
inp.on("line",(data)=>{
    a.push(data);
});
inp.on("close",()=>{
    var b=a[0].split(""),s=0;
    for(var i=0;i<b.length;i++)
    {
        if(b[i]>'0' && b[i]<='9')
        {
            s+=parseInt(b[i]);
        }
    }
    console.log(s);
});

//find the minimum number of characters to be inserted to convert it to palindrome.
const readline=require('readline');
const inp=readline.createInterface({input:process.stdin});
const a=[];
inp.on("line",(data)=>{
    a.push(data);
});
inp.on("close",()=>{
    var f=a[0].split(""),p=0;
    for(var i=0;i<f.length;i++)
    {
        var c=0;
        for(var j=0;j<f.length;j++)
        {
            if(f[i]==f[j]){
            c+=1}
        }
    if(c==1)
    {
        p+=1;
    }
    }
    if(p>0)
    {
        console.log(p-1)
    }
    else
    console.log("0");
    
});

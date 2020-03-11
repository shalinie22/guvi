//How many possible ways are to shuffle given number of playing cards?.
const readline=require('readline');
const inp=readline.createInterface({input:process.stdin});
const a=[];
inp.on("line",(data)=>{
    a.push(data);
});
inp.on("close",()=>{
   var b=parseInt(a[0]);
   var s=1;
   for(var i=1;i<=b;i++)
   {
       s*=i;
   }
   console.log(s);
});

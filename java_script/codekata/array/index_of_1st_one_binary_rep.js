//Print the position of first 1 from right to left, in binary representation of an Integer.
const readline=require('readline');
const inp=readline.createInterface({input:process.stdin});
const a=[];
inp.on("line",(data)=>{
    a.push(data);
});
inp.on("close",()=>{
    var v=parseInt(a[0]);
     var b=parseInt(v, 10).toString(2);
     var s=b.split("");
     var s=s.reverse();
     for(var i=0;i<s.length;i++)
     {
         if(s[i]==1)
         {
             console.log(i+1);
             break;
         }
     }
})

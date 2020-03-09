//Print the max number of toys he can buy.
const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin
});
const a=[];
 var s=0;
 var c=0;
inp.on("line",(data)=>{
  a.push(data);
});
inp.on("close",()=>{
    var f=a[0].split(" ");
    var m=parseInt(f[1]);
    var n=a[1].split(" ");
    var d=[];
   for(var i=0;i<n.length;i++)
   {
       if(n[i]<m)
       {
           d.push(parseInt(n[i]));
       }
   }
  
   for(var i=0;i<d.length;i++)
   {
       if(s<m)
       {
           s+=d[i];
           c+=1;
           continue;
       }
       else
       {
           break;
       }
   }
   console.log(c);
});

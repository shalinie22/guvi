//print the sum of each digit to the power of number of digits in given input.
const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin
});
const a=[];
inp.on("line",(data)=>{
  a.push(data);
});
inp.on("close",()=>{
    var n=a[0].split("");
    var l=n[n.length-1];
    var s=0;
    for(var i=0;i<n.length;i++)
    {
        var b=parseInt(n[i]);
        var e=parseInt(l);
        var p=Math.pow(b,e);
         s+=p;
    }
    console.log(parseInt(s));
}); 

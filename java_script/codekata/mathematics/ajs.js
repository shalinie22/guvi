//whether the number is ‘ajs’ or not.An ‘ajs’ number is a number whose sum of first two digits is present in given number ‘n’
const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin
});
const a=[];
inp.on("line",(data)=>{
  a.push(data);
});
inp.on("close",()=>{
    var f=parseInt(a[0]);
  var n=a[0].split("");
    var sum=parseInt(n[0])+parseInt(n[1]);
    if(sum<f)
    {
        console.log("1");
    }
    else
    {
        console.log("0");
    }
    });

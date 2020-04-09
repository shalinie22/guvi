const readline=require('readline');
const inp=readline.createInterface({input:process.stdin});
const a=[];
inp.on("line",(data)=>{
    a.push(data);
});
inp.on("close",()=>{
    var string=a[0];
    var newString = string.replace(/\s+/g,' ').trim();
    console.log(newString)
})

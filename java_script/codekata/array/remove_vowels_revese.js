// to remove the vowels and reverse the word
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});
const a=[];
inp.on("line", (data) => {
 a.push(data);
});
inp.on("close",()=>{
     var b=a[0].split(""),v=[],c=0;
     for(var i=0;i<b.length;i++)
     {
         if(b[i]=='a' ||b[i]=='e' ||b[i]=='i' ||b[i]=='o' ||b[i]=='u' )
         {
             b[i]="";
         }
     }
     for(var i=b.length;i>=0;i--)
     {
         if(b[i]>='a' && b[i]<='z')
         {
             v.push(b[i]);
            c=1;
         }
     }
  if(c==1)console.log(v.join(""));
  else console.log("-1");
})

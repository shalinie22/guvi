//to map the given aray elements so that each element get increased by 2
/* input:2 34 5 23 45
   output:4 36 7 25 47*/
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});
const a =[];
inp.on("line", (data) => {
  a.push(data);
});
inp.on("close",()=>{
    var b=a[0].split(" ");
    var c=a[1],s=[]
    function mapping(){
        for(var i=0;i<b.length;i++)
        {
            var f=0;
            f=parseInt(b[i])+2;
            s.push(f)
        }
        return s.join(" ")
    }
    console.log(mapping());
})

//to find the sum of the given numbers in the array
/*input:3 43 5 2 1
  output:54*/
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});
const a =[];
inp.on("line", (data) => {
  a.push(data);
});
inp.on("close",()=>{
    var b=a[0].split(" "),s=0;
    function sumnum(){
        for(var i=0;i<b.length;i++)
        {
             s+=parseInt(b[i])
        }
        return s 
        
    }
    console.log(sumnum());
})

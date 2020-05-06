//to find the index of the element in the array
/* input :2 34 5 23 45
          45
   output:4*/
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
    var c=a[1]
    function index(){
        for(var i=0;i<b.length;i++)
        {
            if(b[i]==c)
            {
                return i;
            }
        }
        
    }
    console.log(index());
})

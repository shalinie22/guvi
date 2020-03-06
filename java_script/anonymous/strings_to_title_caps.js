//Convert all the strings to title caps in a string array
var sh = ['s','sh','sha','shal','shalu'];
var s=function(sh){
    for(var i=0;i<sh.length;i++)
    {
        console.log(sh[i][0].toUpperCase()+sh[i].substr(1));
    }
}
s(sh);

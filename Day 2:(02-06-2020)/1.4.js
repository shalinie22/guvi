/*1.4 Display the count of all countries sharing their border with the country name in
console.
(Example Output : Afghanistan shares its border with 6 countries that includes
(“IRN”, “PAK”, “TKM”, “UZB”, “TJK”, “CHN”) )*/

//create a variable request 
var request= new XMLHttpRequest();
//command to  open the url 
                request.open('GET','https://restcountries.eu/rest/v2/all',true)
                //to load the data of the url
                request.onload=function(){
                // json variable stores the data of the url
                    var json=JSON.parse(this.response)
                    //console.log(json)
                    //to iterate the country name and its count of borders
                    for(var i in json)
                    {
                    // print the output
                       console.log(json[i].name+"shares its border with "+json[i].borders.length+" countries that includes"+"("+json[i].borders+")")

                   
                    }
                }
                //call the function request
                request.send();

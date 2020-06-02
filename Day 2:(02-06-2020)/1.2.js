/*1.2 Extract and print the all the country name with capital name in console
(Example Output : Afghanistan : Kabul )*/

//create a variable request 
var request= new XMLHttpRequest();
//command to  open the url 
                request.open('GET','https://restcountries.eu/rest/v2/all',true)
                //to load the data of the url
                request.onload=function(){
                // json variable stores the data of the url
                    var json=JSON.parse(this.response)
                    //console.log(json)
                    //to iterate the country name and its capital
                    for(var i in json)
                    {
                    // print the output
                       console.log(json[i].name+":"+json[i].capital)
                        
                    }
                }
                //call the function request
                request.send();

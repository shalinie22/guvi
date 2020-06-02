/*1.1 Extract and print all the country name with the flag URL in console
(Example Output : Afghanistan : https://restcountries.eu/data/afg.svg )*/

//create a variable request 
var request= new XMLHttpRequest();
//command to  open the url 
                request.open('GET','https://restcountries.eu/rest/v2/all',true)
                //to load the data of the url
                request.onload=function(){
                // json variable stores the data of the url
                    var json=JSON.parse(this.response)
                    //console.log(json)
                    //to iterate the country name and flag
                    for(var i in json)
                    {
                    // print the output
                        console.log(json[i].name +":"+json[i].flag)
                        
                    }
                }
                //call the function
                request.send();

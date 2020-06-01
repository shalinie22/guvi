/*2.2 Insert a new key called email and assign a value email1@gmail.com and
email2@gmail.com respectively in both authorDetails object;*/
//declare a json object named library
var library=[{
                "title":"javascript",
                "price": 500,
                "readers":[{
                            "name":"person1",
                            "count":300
                            },
                            {
                            "name":"person2",
                            "count":400
                            }],
                "authordetails":{
                                "name":"raj",
                                "age":40
                                }
            },
            {
                 "title":"nodejs",
                "price": 600,
                "readers":[],
                 "authordetails":{
                                "name":"raj",
                                "age":40
                                }
                
            }];
    //function to insert the email in both the authordetails
    function to_insert_email(b){
    //to insert the email key and the email id value in the authordetails of javascript 
        library[0].authordetails["email"]="email1@gmail.com";
    //to insert the email key and the email id value in the authordetails of nodejs
library[1].authordetails["email"]="email2@gmail.com";
//to print the updated authodetails of javascript
console.log(library[0].authordetails)
//to print the updated authodetails of nodejs
console.log(library[1].authordetails)
    }
    //call the function to_insert_email by passing the parameter library
    to_insert_email(library);
    

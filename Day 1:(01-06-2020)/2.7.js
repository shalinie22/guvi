//2.7. Print the age of Nodejs Author in console.
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
    // function to find the age of Nodejs Author 
    function age(a){
        // to print the age of Nodejs Author
    console.log(library[1].authordetails.age)
    }
    //call the function age by passing the parameter library
    age(library);
    

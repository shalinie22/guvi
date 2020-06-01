//2.6. Print the price of Javascript book in console.
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
    // function to find the price for javascript 
    function price(a){
        // to print the price for javascript 
    console.log(library[0].price);
    }
    //call the function price by passing the parameter library
    price(library);
    

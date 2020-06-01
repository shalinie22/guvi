//2.4 Create a New Object in the library for a new Book called SQL.
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
    // function to insert new book in the  library named sql
    function to_insert_new_book(a){
    //to push the new book in the library
        library.push({"title":"sql","price":"700"})
        //to print the new book added
console.log(library[2]);
    }
    //call the function to_insert_new_book by passing the parameter library
    to_insert_new_book(library);
    

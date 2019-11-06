//Problem statement
//Implement a function that takes a function as its first argument, 
//a number num as its second argument, 
//then executes the passed in function num times.

function repeat(operation, num) {
    if (num <= 0){ return null }{
    for(var i = 0; i < num; i++){
        operation = (num) => {
            return operation(num)
        };
    }
    }
}
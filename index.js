//This is just a function that should receive a callback function as an argument. 
// The first function takes a callback function as a parameter and then is also called in the first function's body. 
// A function that is passed as a parameter to another function is a callback function. 

function receivesAFunction(callback){
    callback();
}


// This next function should take no arguments and return a named functon. 
// This means that the function body needs to return a value. 
// Can put the named function inside the function body or outside. 
// Since no arguments are passed, there are no parameters in the named function. The parenthesis are empty.

function returnsANamedFunction() {
    return function namedFunction(){};
}
 

// This next function should take no arguments and return a unnamed functon. 
// The unnamed function is anonymous. 
function returnsAnAnonymousFunction() {
    return function(){};
}
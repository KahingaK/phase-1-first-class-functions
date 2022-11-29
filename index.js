// A function that takes a callback function
function receivesAFunction(callBackFunction) {
    callBackFunction()
    
}

//A function that returns a named function
function returnsANamedFunction(){
    return function callBackFunction(){}
}

//A function that returns an anonymous function
function returnsAnAnonymousFunction(){
    return function () {
        
    }
}



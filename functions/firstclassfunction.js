const mul=function (a,b){
    return a*b
}


const firstClassFunction=function(fun){

    console.log(fun(3,13))

}

firstClassFunction(mul)

// this is a first class function
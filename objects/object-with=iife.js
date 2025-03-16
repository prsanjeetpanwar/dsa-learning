const fun= (function dell(a){
    delete a;
    return a;
})(4)
console.log(fun)
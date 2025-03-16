function infinite(a){
    return function(b){
       if(b) return infinite(a+b)
        return a

    }
}
console.log(infinite(2)(3)())
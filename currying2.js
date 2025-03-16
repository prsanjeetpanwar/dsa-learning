const a =function (b){
    
    return function(c){
        return function(d){
            return b*c*d
        }
    }
 
}

console.log(a(2)(3)(4))
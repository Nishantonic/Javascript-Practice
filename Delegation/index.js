function mult(x){
    return function(y){
        return x * y;
    }
}


const delegation = mult(12);

console.log(delegation(98))
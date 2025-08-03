function hof(arr, opp){
    return arr.map(x => opp(x))
}

function mult(val){
    return val * 10;
}
let arr = [23,34,45,43,23,45]

// const hof = (arr, mult) => arr.map(x => mult(x));

console.log(hof(arr, mult))


const map = [] 
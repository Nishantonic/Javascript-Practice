
function memoization(fnx){
    const cache = {};
    return function(...args){
        const key = JSON.stringify(args)

        if(cache[key]){
            console.log("key already present", args );
            return cache[key];
        }else{
            console.log("Creating new value");
            let result = fnx(args)
            cache[key] = result;
            return result;
        }
    }
}

function fabonaci(a){
    return a * 8;
}

const memoizationfab = memoization(fabonaci)
console.log("my data is: ", memoizationfab(5));
console.log("my data is: ", memoizationfab(5));


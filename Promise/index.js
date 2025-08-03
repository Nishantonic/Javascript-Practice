const container = document.getElementById("container")


const div = document.createElement("div");
div.textContent = "Nishant Banger";
container.appendChild(div);





function orderCloth(item){
    return new Promise((resolve, reject)=>{

        setTimeout(() => {
             if(item == "t-shirt" || item == "jeans"){
            resolve(item);
        }else{
            reject(item)
        }
        }, 1000);
       
    })
}

const allorder =Promise.allSettled([
    orderCloth("t-shirt"),
    orderCloth('jeans'),
    orderCloth("shirt")
])
allorder.then((results) =>{
    results.forEach((result, index)=>{
        if(result.status == "fulfilled")
        console.log(`${result.value} order successfully`)
        else{
            console.log(`${result.reason} out of Stock`);
            
        }
        
    })

})
// const { cloneElement } = require("react");
// const deepCloneobj = require("lodash");

const container = document.getElementById("container");
const fruits = document.getElementById("fruits");


const user = {
  name: "Nishant",
  address: {
    city: "Gwalior",
    pin: 474001,
    coordinates: {
      lat: 26.2,
      lng: 78.2
    }
  }
};

function deepClone(user){

    if(user === null || typeof user !== "object")
        return user;

    if(Array.isArray(user)){
        return user.map(deepClone)
    }

    const clone = {};
    for(let key in user){
        clone[key] = deepClone(key);
    }
    return clone;
}

const cloneObj = deepClone(user);
// const cloneobj2 = deepCloneobj(cloneObj)
console.log("My Cloning object is: " , cloneObj);
// container.textContent = cloneobj2;


fruits.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
      console.log(`Button Clicked ${e.target.textname}`);
      
    }
})

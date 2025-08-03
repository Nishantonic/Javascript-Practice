const inputEle = document.getElementById('myInput')
const outputEle = document.getElementById('output')


function getData(event){
  outputEle.textContent = `data:  ${event.target.value} `;
  console.log("Input data", event.target.value)
}

inputEle.addEventListener('input', getData);
// getData()
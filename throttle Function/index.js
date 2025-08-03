const imageContainer = document.getElementById("imageContainer");

for (let i = 0; i < 100; i++) {
  const img = document.createElement("img");
  img.src = "https://d2yjqys1j7uhg1.cloudfront.net/images/machine-coding-graphic.svg";
  img.alt = `Image number ${i}`;
  imageContainer.appendChild(img);
}



function throttle(funx, delay){
  let timer =0;
  return function(...args){
    let now = Date.now();
    if(now - timer >= delay){
      timer = now;
      funx.apply(this,args )
  
    }
  }
}
function handleThrottle(e) {
  console.log("Scroll position:", e.target.scrollTop);
  e.target.style.border = "2px solid red"; // Show that throttle is firing
}

const throttlefunx = throttle(handleThrottle, 300);

imageContainer.addEventListener("scroll", throttlefunx)

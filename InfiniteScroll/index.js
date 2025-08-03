function InfiteScrolling(){

    const content = document.getElementById("content");

    for(let i =0; i<100; i++){
        const div = document.createElement("div");
        div.textContent = "Random Number Generated : " + Math.floor(Math.random() * 10000);
        content.appendChild(div);
    }
}
    window.addEventListener('scroll', ()=>{
        const {scrollTop, scrollHeight, clientHeight} = document.documentElement;

        if(scrollTop + clientHeight >= scrollHeight -5){
            InfiteScrolling()
        }
    })

    InfiteScrolling();

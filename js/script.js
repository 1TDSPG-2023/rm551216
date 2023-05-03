/*<!-- <button onclick="alert(document.querySelectorAll('h2'))">BEM VINDOS!</button> -->*/

const btn = document.getElementById("meu-btn");

btn.addEventListener("click", function(){
    console.log(this.textContent);
    let r = 0;
    let g = 0;
    let b = 0;

    r = Math.round (Math.random() *255);
    g = Math.round (Math.random() *255);
    b = Math.round (Math.random() *255);

    this.setAttribute("style", `color:rgb(${r},${g},${b});`)
});

const h2Element = document.getElementById("meu-tit");
h2Element.addEventListener("click", ()=>{
    h2Element.setAttribute("style", "font-size:15px");
});






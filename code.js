let btn = document.getElementById("btn");
let btn1 = document.getElementById("btn1");

let i = document.getElementById("heart");
let i2 = document.getElementById("scale");


btn.addEventListener("mouseover", () => {

    i.classList.add("fa-bounce")
})

btn.addEventListener("mouseout", () => {

    i.classList.remove("fa-bounce")

})

btn1.addEventListener("mouseover", () => {

    i2.classList.add("fa-shake")
})

btn1.addEventListener("mouseout", () => {

    i2.classList.remove("fa-shake")

})

let numContainer = document.getElementById("num");
let value = 0;

let btn_inc = document.querySelector(".inc");
let btn_dec = document.querySelector(".dec");
let btn_reset = document.querySelector(".reset");

btn_inc.addEventListener("click", () => {
    numContainer.innerText = ++value;
});

btn_dec.addEventListener("click", () => {
    numContainer.innerText = --value;
});

btn_reset.addEventListener("click", () => {
    numContainer.innerText = 0;
});

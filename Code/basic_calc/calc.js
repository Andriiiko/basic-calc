const btnPlus = document.getElementById("plus");
const btnMinus = document.getElementById("minus");
const btnMultiply = document.getElementById("multiply");
const btnDivide = document.getElementById("divide");
const input1 = document.querySelector("#input1");
const input2 = document.querySelector("#input2");



btnPlus.addEventListener("click", plus);
btnMinus.addEventListener("click", minus);
btnMultiply.addEventListener("click", multiply);
btnDivide.addEventListener("click", divide);

function msg() {
    if (input1.value === "") {
        alert("Введіть будь ласка цифру в обидва поля!");
    }
    if (input2.value === "") {
        alert("Введіть будь ласка цифру в обидва поля!");
    }

}

function plus() {
    msg();
    let inp1 = document.querySelector("#input1");
    let val1 = Number(inp1.value);
    let inp2 = document.querySelector("#input2");
    let val2 = Number(inp2.value);
    let total = document.querySelector(".total");
    result = val1 + val2;
    total.textContent = result;
}

function minus() {
    msg();
    let inp1 = document.querySelector("#input1");
    let val1 = Number(inp1.value);
    let inp2 = document.querySelector("#input2");
    let val2 = Number(inp2.value);
    let total = document.querySelector(".total");
    result = val1 - val2;
    total.textContent = result;
    if(input.value === "") {
        alert("Введіть будь ласка цифру в обидва поля!");
    }
}

function multiply() {
    msg();
    let inp1 = document.querySelector("#input1");
    let val1 = Number(inp1.value);
    let inp2 = document.querySelector("#input2");
    let val2 = Number(inp2.value);
    let total = document.querySelector(".total");
    result = val1 * val2;
    total.textContent = result;
    if(input.value === "") {
        alert("Введіть будь ласка цифру в обидва поля!");
    }
}

function divide() {
    msg();
    let inp1 = document.querySelector("#input1");
    let val1 = Number(inp1.value);
    let inp2 = document.querySelector("#input2");
    let val2 = Number(inp2.value);
    let total = document.querySelector(".total");
    result = val1 / val2;
    total.textContent = result;
    if(input.value === "") {
        alert("Введіть будь ласка цифру в обидва поля!");
    }
}




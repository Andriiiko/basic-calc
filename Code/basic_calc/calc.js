const btnPlus = document.getElementById("plus");
const btnMinus = document.getElementById("minus");
const btnMultiply = document.getElementById("multiply");
const btnDivide = document.getElementById("divide");



btnPlus.addEventListener("click", plus);
btnMinus.addEventListener("click", minus);
btnMultiply.addEventListener("click", multiply);
btnDivide.addEventListener("click", divide);

function plus() {
    let inp1 = document.getElementById("input1");
    let val1 = Number(inp1.value);
    let inp2 = document.getElementById("input2");
    let val2 = Number(inp2.value);
    let total = document.getElementsByClassName("total");
    result = val1 + val2;
    total.textContent = result;


}




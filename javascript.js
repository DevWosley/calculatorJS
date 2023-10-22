const btn1 = document.querySelector("#btn1")
const btn2 = document.querySelector("#btn2")
const btn3 = document.querySelector("#btn3")
const btn4 = document.querySelector("#btn4")
const btn5 = document.querySelector("#btn5")
const btn6 = document.querySelector("#btn6")
const btn7 = document.querySelector("#btn7")
const btn8 = document.querySelector("#btn8")
const btn9 = document.querySelector("#btn9")
const btn0 = document.querySelector("#btn0")
const btnResult = document.querySelector("#btnResult")
const btnAdd = document.querySelector("#btnAdd")
const btnSubtract = document.querySelector("#btnSubtract")
const btnMultiply = document.querySelector("#btnMultiply")
const btnDivide = document.querySelector("#btnDivide")
const btnReset = document.querySelector("#btnReset")

let currentOperator
let screenValue = document.querySelector("#screen")
let secondValue;
let resulted = false;
let calculated = false;
function calculaterInput(input){
    if(calculated){
        screenValue.textContent = ""
        calculated = false;
        screenValue.textContent += input;
        resulted = false;
    } else {
    screenValue.textContent += input;
    calculated = false;
    }
}
function operator(operator){
    if(calculated){
        currentOperator = operator
    } else {
    if(!secondValue && !calculated && operator != "result"){
        console.log("lmao")
        currentOperator = operator;
        secondValue = screenValue.textContent;
        screenValue.textContent = "";
        calculated = true;
        return;
    } else {
    if(operator == "result" && !calculated && !resulted){
        console.log("done")
        console.log(currentOperator)
        if(currentOperator == "add"){
            console.log("doneee")
            screenValue.textContent = parseInt(screenValue.textContent) + parseInt(secondValue);
            secondValue = ""
            calculated = false;
            resulted = true;
        }
        if(currentOperator == "subtract"){
            console.log("doneee")
            screenValue.textContent =  parseInt(secondValue) - parseInt(screenValue.textContent);
            secondValue = ""
            calculated = false;
            resulted = true;
        }
        if(currentOperator == "multiply"){
            console.log("doneee")
            screenValue.textContent = parseInt(screenValue.textContent) * parseInt(secondValue);
            secondValue = ""
            calculated = false;
            resulted = true;
        }
        if(currentOperator == "divide"){
            console.log("doneee")
            screenValue.textContent =  parseInt(secondValue) / parseInt(screenValue.textContent);
            secondValue = ""
            calculated = false;
            resulted = true;
        }
    } else if(operator == "add" && !calculated){
        currentOperator = "add"
        secondValue = parseInt(screenValue.textContent) + parseInt(secondValue);
        screenValue.textContent = secondValue.toString();
        calculated = true;
    } else if(operator == "subtract" && !calculated){
        currentOperator = "subtract"
        secondValue = parseInt(screenValue.textContent) - parseInt(secondValue);
        screenValue.textContent = secondValue.toString();
        calculated = true;
    } else if(operator == "multiply" && !calculated){
        currentOperator = "multiply"
        secondValue = parseInt(screenValue.textContent) * parseInt(secondValue);
        screenValue.textContent = secondValue.toString();
        calculated = true;
    } else if(operator == "divide" && !calculated){
        currentOperator = "divide"
        secondValue = parseInt(screenValue.textContent) / parseInt(secondValue);
        screenValue.textContent = secondValue.toString();
        calculated = true;
    }
    
}
    }
}

function reset(lmao){
    console.log("reset")
    currentOperator = "";
    screenValue.textContent = "";
    secondValue = ""
    resulted = false;
    calculated = false;
}




// Button functions
btn1.addEventListener("click", calculaterInput.bind(null, "1"), false)
btn2.addEventListener("click", calculaterInput.bind(null, "2"), false)
btn3.addEventListener("click", calculaterInput.bind(null, "3"), false)
btn4.addEventListener("click", calculaterInput.bind(null, "4"), false)
btn5.addEventListener("click", calculaterInput.bind(null, "5"), false)
btn6.addEventListener("click", calculaterInput.bind(null, "6"), false)
btn7.addEventListener("click", calculaterInput.bind(null, "7"), false)
btn8.addEventListener("click", calculaterInput.bind(null, "8"), false)
btn9.addEventListener("click", calculaterInput.bind(null, "9"), false)
btn0.addEventListener("click", calculaterInput.bind(null, "0"), false)

//Operator functions
btnResult.addEventListener("click", operator.bind(null, "result"), false)
btnAdd.addEventListener("click", operator.bind(null, "add"), false)
btnSubtract.addEventListener("click", operator.bind(null, "subtract"), false)
btnMultiply.addEventListener("click", operator.bind(null, "multiply"), false)
btnDivide.addEventListener("click", operator.bind(null, "divide"), false)

btnAdd.addEventListener("click", operator.bind(null, "add"), false)
btnSubtract.addEventListener("click", operator.bind(null, "subtract"), false)
btnMultiply.addEventListener("click", operator.bind(null, "multiply"), false)
btnDivide.addEventListener("click", operator.bind(null, "divide"), false)

btnReset.addEventListener("click", reset(), false)


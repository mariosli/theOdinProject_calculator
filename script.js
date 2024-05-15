function add(a, b) {
    return parseInt(a) + parseInt(b);
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

// console.log(add(4, 2));
// console.log(subtract(4, 2));
// console.log(multiply(4, 2));
// console.log(divide(4, 3));

let first_num = "";
let second_num = "";
let operator = "";
let result;

console.log(first_num);

function operate(num1, num2, operator) {
    switch(operator) {
        case '+':
            return (add(num1, num2));
        case '-':
            return (subtract(num1, num2));
        case '×':
            return (multiply(num1, num2));
        case '÷':
            return (divide(num1, num2));
    }
}


let buttons = document.querySelectorAll(".num-button");

buttons.forEach((button) => {
    button.addEventListener("click", function() {
        // console.log(this.innerText);
        if ((this.innerText === "+" ||
            this.innerText === "-" ||
            this.innerText === "×" ||
            this.innerText === "÷") && result === undefined 
        ) {
            operator = this.innerText;
        }
        else if ((this.innerText === "+" ||
                 this.innerText === "-" ||
                 this.innerText === "×" ||
                 this.innerText === "÷") && result !== undefined 
        ) {
            operator = this.innerText;
            first_num = result;
        }
        else if (this.innerText === "AC") {
            first_num = "";
            second_num = "";
        }
        else if (this.innerText === "=") {
            if (second_num == 0 && operator === "÷") {
                result = "Do not divide with 0"
            }
            else {
                result = operate(first_num, second_num, operator);
                first_num = "";
                second_num = "";
                operator = "";
            }
        }
        else if (operator === "") {
            first_num = first_num + this.innerText
        }
        else {
            second_num += this.innerText;
        }
        
        displayPressed(this.innerText)

    })
});

function displayPressed(pressedButton) {
    const newNum = document.createElement("p");
    const displayArea = document.querySelector(".display");
    
    if (result !== undefined) {
        displayArea.replaceChildren();
    }

    if (pressedButton === "AC" ||
        pressedButton === "+" ||
        pressedButton === "-" ||
        pressedButton === "×" ||
        pressedButton === "÷" 
    ) {
        displayArea.replaceChildren();
        // newNum.textContent = 0;
    }
    else if (pressedButton === "=") {
        displayArea.replaceChildren();
        newNum.textContent = result;
    }
    else {
        newNum.textContent = pressedButton;    
    }

    displayArea.appendChild(newNum);
}
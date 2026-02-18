// let string = "";
// let buttons = document.querySelectorAll('.button');
// Array.from(buttons).forEach((button)=>{
//     button.addEventListener('click', (e)=>{
//         if(e.target,innerHTML == '='){
//             string = eval(string);
//             document.querySelector('input').value = string;
//         }
//         else{
//              console.log(e.target);
//              string = string + e.target.innerHTML
//              document.querySelector('input').value = string;
//         }
       
//     })
// })

// let display = document.getElementById("display");

// function appendValue(value) {
//     display.value += value;
// }

// function clearDisplay() {
//     display.value = "";
// }

// function deleteLast() {
//     display.value = display.value.slice(0, -1);
// }

// function calculate() {
//     try {
//         display.value = eval(display.value);
//     } catch (error) {
//         alert("Invalid Expression");
//     }
// }

let input = document.querySelector(".input");
let buttons = document.querySelectorAll(".button");

let expression = "";

buttons.forEach(button => {
    button.addEventListener("click", function () {

        let value = this.innerText;

        // AC button
        if (value === "AC") {
            expression = "";
            input.value = "";
        }

        // Equal button
        else if (value === "=") {
            try {
                // Replace x with *
                expression = expression.replace(/x/g, "*");
                input.value = eval(expression);
                expression = input.value.toString();
            } catch {
                input.value = "Error";
                expression = "";
            }
        }

        // Normal buttons
        else {
            expression += value;
            input.value = expression;
        }
    });
});
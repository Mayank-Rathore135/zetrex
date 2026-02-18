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
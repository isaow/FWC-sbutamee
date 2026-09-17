const left = document.getElementById("left");
const right = document.getElementById("right");
const operator = document.getElementById("operator");
const button = document.getElementById("calculate");

button.addEventListener("click", function () {

    const num1 = Number(left.value);
    const num2 = Number(right.value);
    let result;

    // Check input
    if (
        left.value === "" ||
        right.value === "" ||
        !Number.isInteger(num1) ||
        !Number.isInteger(num2) ||
        num1 < 0 ||
        num2 < 0
    ) {
        alert("Error :(");
        return;
    }

    // Check division or modulo by zero
    if ((operator.value === "/" || operator.value === "%") && num2 === 0) {
        alert("It's over 9000!");
        console.log("It's over 9000!");
        return;
    }

    // Calculate
    if (operator.value === "+") {
        result = num1 + num2;
    } else if (operator.value === "-") {
        result = num1 - num2;
    } else if (operator.value === "*") {
        result = num1 * num2;
    } else if (operator.value === "/") {
        result = num1 / num2;
    } else if (operator.value === "%") {
        result = num1 % num2;
    }

    alert(result);
    console.log(result);
});


// Alert every 30 seconds
setInterval(function () {
    alert("Please, use me...");
}, 30000);
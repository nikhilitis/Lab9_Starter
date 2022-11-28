// STEP 4
class CalculatorError extends Error {
    constructor(message) {
        super(message); // (1)
        this.name = "CalculatorError"; // (2)
    }
}

// STEP 3
let form = document.querySelector('form');
form.addEventListener('submit', e => {
    e.preventDefault();
    let output = document.querySelector('output');
    let firstNum = document.querySelector('#first-num').value;
    let secondNum = document.querySelector('#second-num').value;
    let operator = document.querySelector('#operator').value;
    try {
        output.innerHTML = eval(`${firstNum} ${operator} ${secondNum}`);
    } catch (err) {
        console.log("An error has occurred.");
        throw new CalculatorError("Whoops!");
    } finally {
        console.log("Attempted to perform a calculator operation.");
    }
});

let errorBtns = Array.from(document.querySelectorAll('#error-btns > button'));


// STEP 2
for (let i=0; i<errorBtns.length; i++){

    errorBtns[i].addEventListener("click", function() {
        let buttonName = errorBtns[i].innerHTML;
        if (buttonName == "Console Log"){
            console.log("Console Log Demo");
        } else if (buttonName == "Console Error"){
            console.error("Console Error Demo");
        } else if (buttonName == "Console Count"){
            console.count("Count Button");
        } else if (buttonName == "Console Warn"){
            console.warn("Console Warn Button");
        } else if (buttonName == "Console Assert"){
            console.assert();
        } else if (buttonName == "Console Clear"){
            console.clear();
        } else if (buttonName == "Console Dir"){
            console.dir(errorBtns[i]);
        } else if (buttonName == "Console dirxml"){
            console.dirxml(errorBtns[i]);
        } else if (buttonName == "Console Group Start"){
            console.group();
        } else if (buttonName == "Console End"){
            console.groupEnd();
        } else if (buttonName == "Console Table"){
            console.table(["apples", "oranges", "bananas"]);
        } else if (buttonName == "Start Timer"){
            console.time();
        } else if (buttonName == "End Timer"){
            console.timeEnd();
        } else if (buttonName == "Console Trace"){
            console.trace();
        } else if (buttonName == "Trigger a Global Error"){
            throw Error("An error has occurred");
        }
    });

}

// STEP 5
window.onerror = function(errorMsg, url, lineNumber){
    console.log(errorMsg);
    TrackJS.track('Testing TrackJS!');
}
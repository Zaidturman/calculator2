let currentInput = "0";
let history = "";
let isResultDisplayed = false;

function clearDisplay() {
  currentInput = "0";
  history = "";
  updateDisplay();
}

function appendNubmer(number) {
  if (isResultDisplayed) {
    currentInput = number.toString();
    isResultDisplayed = false;
  } else {
    currentInput =
      currentInput === "0" ? number.toString() : currentInput + number;
  }
  updateDisplay();
}

function updateDisplay() {
  document.getElementById("result").textContent = currentInput;
  document.getElementById("history").textContent = history;
}

function appendOperator(operator) {
  if (isResultDisplayed) {
    isResultDisplayed = false;
  }
  history += currentInput + " " + operator + " ";
  currentInput = "0";
  updateDisplay();
}

function appendDot() {
  if (!currentInput.includes(".")) {
    currentInput += ".";
  }
  updateDisplay();
}

function changeSign() {
  currentInput = (parseFloat(currentInput) * -1).toString();
  updateDisplay();
}

function calculateResult() {
  try {
    history += currentInput;
    currentInput = eval(history.replace("×", "*").replace("÷", "/")).toString();
    isResultDisplayed = true;
    updateDisplay();
  } catch {
    currentInput = "Error";
    updateDisplay();
  }
}

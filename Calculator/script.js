// clears all the values
function clearScreen() {
  document.getElementById("result").value = "";
}

// displays the values
function display(value) {
  document.getElementById("result").value += value;
}

// evaluates the expression and returns the result
function calculate() {
  var p = document.getElementById("result").value;
  var q = eval(p);
  document.getElementById("result").value = q;
}
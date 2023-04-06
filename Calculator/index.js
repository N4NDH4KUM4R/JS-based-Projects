
let getNumberOneEl = prompt("Enter your first number");
getNumberOneEl = parseInt(getNumberOneEl);  //convert string to number
 
let getNumberTwoEl = prompt("Enter your second number");
getNumberTwoEl = parseInt(getNumberTwoEl);  //convert string to number


let operator = prompt(`Choose operator (+,-,*,/,%)`);


let result;    
if (operator === "+") {
  result = getNumberOneEl + getNumberTwoEl;
} else if (operator === "-") {
  result = getNumberOneEl - getNumberTwoEl;
} else if (operator === "*") {
  result = getNumberOneEl * getNumberTwoEl;
} else if (operator === "/") {
  result = getNumberOneEl / getNumberTwoEl;
} else if (operator === "%") {
  result = getNumberOneEl / getNumberTwoEl;
} else {
  // alert("!invalid operator. please choose any of the one operator(+,-,*,/,%)");
  alert("!Oops invalid operator")
}

let button = () => {
  document.getElementById("result").innerHTML = `<h3>${getNumberOneEl}  ${operator}  ${getNumberTwoEl} = ${result}</h3>`;
}
// showing result using addEventListener
let resultBtnEl = document.getElementById("btn-result").addEventListener("click", button);


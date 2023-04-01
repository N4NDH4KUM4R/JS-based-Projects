let inputEl = document.getElementById("input_box").value;

submit = () => {
  let inputEl = document.getElementById("input_box").value;
  
  if (inputEl.length > 0) {
    let divEl = document.getElementById("items");

    let inputList = document.createElement("p");

    // insert input values into p element
    inputList.innerText = inputEl; 

    // create a span tag and add Attribute
    let clear = document.createElement("span");
    clear.setAttribute("class", "clearbtn");
    clear.innerText = "❌";

    //append values and Element
    inputList.appendChild(clear);
    divEl.appendChild(inputList);
  }
  else {
    alert("!Oops Invalid Values");
  }
};

document.getElementById("btn").addEventListener("click", submit);

// remove child and parent
clear = (removeSpan) => { 
  let itemsEl = removeSpan.target.parentElement;
  itemsEl.remove();
};

document.addEventListener("click", (removeSpan) => {
  if (removeSpan.target.classList.contains("clearbtn")) {
    clear(removeSpan);
  }
});

// input Box Clear
clearInput = () => {
  document.getElementById("input_box").value = "";
};

document.getElementById("btn-clear").addEventListener("click", clearInput);

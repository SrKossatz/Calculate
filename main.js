let showResult = document.querySelector("#dial");
let result = document.querySelector(".confirm");

function insert(number) {
  showResult.innerHTML += number;
}

function clean() {
  showResult.innerHTML = "";
}

function backspace() {
  if (showResult.textContent) {
    let back = document.querySelector("#dial").innerHTML;
    showResult.innerHTML = back.substring(0, back.length - 1);
  }
}

function calculate() {
  if (showResult.textContent) {
    document.querySelector("#dial").innerHTML = eval(showResult.innerHTML);
  }
}

document.addEventListener("keydown", function (event) {
  if (/[0-9+\-*/.]/.test(event.key)) {
    insert(event.key);
  } else if (event.key === "Enter") {
    calculate();
  } else if (event.key === "Backspace") {
    backspace();
  }else if(event.key === "Escape"){
    clean();
  }
  
});

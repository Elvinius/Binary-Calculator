let screen = document.querySelector("#res");
let buttonClear = document.querySelector("#btnClr"); 
let buttonZero = document.querySelector("#btn0");
let buttonOne = document.querySelector("#btn1");
let buttonEqual = document.querySelector("#btnEql");
let buttonSum = document.querySelector("#btnSum");
let buttonSub = document.querySelector("#btnSub");
let buttonMul = document.querySelector("#btnMul");
let buttonDivision = document.querySelector("#btnDiv");

var action =function () {
      screen.innerHTML += this.innerHTML;
  }
buttonZero.addEventListener("click", action);
buttonOne.addEventListener("click", action);
buttonSum.addEventListener("click", action);
buttonSub.addEventListener("click", action);
buttonMul.addEventListener("click", action);
buttonDivision.addEventListener("click", action);
buttonClear.addEventListener("click", function() {
    screen.innerHTML = "";
});

buttonEqual.addEventListener("click", function(){
     let calcSign = screen.innerHTML[screen.innerHTML.search(/\D/)];
     let result;
    calcSign == "/" ? result = Math.floor(screen.innerHTML
    .split(/\D/)
    .map(num => parseInt(num,2))
    .reduce((acc, val) => eval(acc + calcSign + val))
    .toString(2)) : result = screen.innerHTML
    .split(/\D/).map(num => parseInt(num,2))
    .reduce((acc, val) => eval(acc + calcSign + val))
    .toString(2);
    screen.innerHTML = result;
});
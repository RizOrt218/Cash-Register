 var cashRegister = (function (){

  var memory = 0;
  var display = 0;
  var decimalInput = true;

  var calcResult = function(){
    if(display !== clear){
      document.getElementById("calcResult").innerHTML += display;
    }
  };

  var clear = document.getElementById("clear");
    clear.addEventListener("click", function(){
      //clear display!!!
  });

  var buttonOne = document.getElementById("one");
  buttonOne.addEventListener("click", function(){
    display = 1;
    calcResult();
  });

  var buttonTwo = document.getElementById("two");
  buttonTwo.addEventListener("click", function(){
    display = 2;
    calcResult();
  });

  var buttonThree = document.getElementById("three");
  buttonThree.addEventListener("click", function(){
    display = 3;
    calcResult();
  });

  var buttonFour = document.getElementById("four");
  buttonFour.addEventListener("click", function(){
    display = 4;
    calcResult();
  });









// console.log(CalculatorModule.multiply);
 })();
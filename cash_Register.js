 (function (){

  var memory = [];
  var total = [];

  var calcResult = function(){
    document.getElementById("calcResult").innerHTML = total;
  };

  var buttonOne = document.getElementById("one");
  var buttonTwo = document.getElementById("two");
  var buttonThree = document.getElementById("three");
  var buttonFour = document.getElementById("four");
  var buttonFive = document.getElementById("five");
  var buttonSix = document.getElementById("six");
  var buttonSeven = document.getElementById("seven");
  var buttonEight = document.getElementById("eight");
  var buttonNine = document.getElementById("nine");
  var clear = document.getElementById("clear");

  clear.addEventListener("click", function(){
    total = "0.00";
    calcResult();
  });




  buttonSeven.addEventListener("click", function(){
    total = 7;
    calcResult();
  });

  buttonEight.addEventListener("click", function(){
    total = 8;
    calcResult();
  });








// console.log(CalculatorModule.multiply);
 })();
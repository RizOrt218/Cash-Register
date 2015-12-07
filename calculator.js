var CalculatorModule = (function(){

  var module = {};

  //PRIVATE
  var memory = 0;
  var total = 0;

  function isaNum(num) {
    if( Number.isInteger(num) ) {
      return true;
    } else {
      throw(new Error('not an integer'));
      }
  }
    module.load = function(x){
      if ( isaNum(x) ){
        total = x;
        return total;
      }
    };
    module.getTotal = function(){
      return total;
    };

    module.add = function(x){
      if ( isaNum(x) ){
        total = total + x;
        return total;
       }
    };

    module.subtract = function(x){
      if ( isaNum(x) ){
        total = total - x;
      }
    };

    module.multiply = function(x){
      if ( isaNum(x) ){
        total = total * x;
      }
    };

    module.divide = function(x){
      if ( isaNum(x) ){
        total = total/ x;
      }
     };

    module.recallMemory = function(){
     return memory;
    };

    module.saveMemory = function(){
      memory = total;
      return memory;
    };

    module.clearMemory = function(){
      memory = 0;
    };

  return module;

}());



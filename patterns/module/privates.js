var module = (function (){

  var private_var = 'Private!',
      private_exposed_var = 0,
      public_var = 'Public!'


  function getExposedVar(){
    return private_exposed_var;
  }

  function incrementExposedVar(){
    private_exposed_var += 1;
  }


  return {
    public_var: public_var,
    getExposedVar: getExposedVar,
    incrementExposedVar: incrementExposedVar
  };

}());


console.log(module);

console.log(module.getExposedVar());
module.incrementExposedVar();
console.log(module.getExposedVar());

console.log(module.private_var);
console.log(module.public_var);
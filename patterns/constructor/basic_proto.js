/**
 * Car constructor function
 * Automatically assigns passed in properties from the o parameter
 *
 * @param o {object}  Options
 */
function Car(o){
  o = o || {};

  for(var key in o)
    this[key] = o[key];
}
  
/**
 * Car instance method getInfoString
 *
 * @return {string}  Info about the car
 */
Car.prototype.getInfoString = function (){
  return 'A ' + this.color + ' ' + this.brand
    + ' which has driven ' + this.km + ' kilometers';
};


// Call Car constructor to get instance
var car1 = new Car({
  brand: 'Volvo',
  color: 'red',
  km: 100000
});


console.log( car.getInfoString() );
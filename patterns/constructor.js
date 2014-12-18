function Car(o){
  o = o || {};

  for(var key in o)
    this[key] = o[key];
}

Car.prototype.getInfoString = function (){
  return 'A ' + this.color + ' ' + this.brand
    + ' which has driven ' + this.km + ' kilometers';
};

var car1 = new Car({
  brand: 'Volvo',
  color: 'red',
  km: 100000
});


console.log( car.getInfoString() );
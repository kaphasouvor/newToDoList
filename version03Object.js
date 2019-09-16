var myComputer = {
  operatingSystem: 'mac',
  screenSize: '15 inches',
  purchaseYear: 2011
}

var khammy = {
  name: 'Khammy',
  // method is a property that is equal to a function. sayName is a method on the gordan object. 
  sayName: function(){
    // an anonymous function because it doesnt have a name.
    console.log(this.name);
  }
}

khammy.sayName();





console.log(myComputer.screenSize)
console.log(myComputer.operatingSystem)
console.log(myComputer.purchaseYear)
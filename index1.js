function pizzaOven(crustType,sauceType,cheeses,toppings){
    var pizza={};
    pizza.crustType=crustType;
    pizza.sauceType=sauceType;
    pizza.cheeses=cheeses;
    pizza.toppings=toppings;
    return pizza;

    function randomPizza(pizza1,pizza2){
        var crustTypes=['thin','hand tossed','deep dish'];
        var sauceTypes=['moazallela','feta','chedder'];
        var cheesess=['feta','bbq'];
        var toppingss=['onoin','lamb','beaf','sasuages','mashroom'];

        var pizza={};
        pizza.crustType=crustTypes[Math.floor(Math.random()*crustTypes.length)];
        pizza.cheeses=cheesess[Math.floor(Math.random()*cheesess.length)];
        pizza.sauceType=sauceTypes[Math.floor(Math.random()*sauceTypes.length)];
        pizza.toppingss=[];
        for(var i=0; i <3; i++){
                pizza.toppingss.push(toppingss[Math.floor(mathh.random*toppingss.length)]);
        }
        return pizza;

    }
}
 console.log('I want to pizza with');

    
var pizza1=pizzaOven('deep wish','traditional','mozzarella',['pepperoni','sausage']);
console.log(pizza1);

var pizza2=pizzaOven('hand tossed','marinara',['mozzarella','feta'],['mushrooms','olives','onine']);
var pizza3=pizzaOven('hand tossed','marinara',['mozzarella','feta'],['vegtables','corns']);
var pizza4=pizzaOven('hand tossed','marinara',['mozzarella','feta'],['chicken','beef']);
console.log(pizza1);
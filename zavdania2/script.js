//Без циклу//
let prog1 = function(n,q){
     let b1 = 1;
     let Sn=b1*(1-q**n)/(1-q);
     console.log(Sn);
}
prog1(4,3);


// Цикл//
let prog2 = function(a,b) {
    let sum = 1;
    let number = 1;
    for(let i = 1; i < a; i++) {
      number *= b;
      sum += number;
    }
    console.log(sum)
  }
 
prog2(5,2)

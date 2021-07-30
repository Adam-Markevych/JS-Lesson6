
let prosticzysla = (a,b) => {
    a = prompt(`Введіть перше число`);
    b = prompt(`Введіть друге число`);
    let str = '';
    let count = 0;
    nextPrime:
     for(let i = a; i <= b; i++){

        for(let j = 2; j < i; j++){
            if (i % j == 0) continue nextPrime;
        }
        str += i + ' ';
        count++;
    }
    console.log(`Прості числа в діапазоні між ${a} і ${b}:`,str);
}
prosticzysla();



let fibinachi = (n) => {
    let a = 1, b = 1;

    for(let i = 1; i < n; i++){
        let fib = b;
        b = a + b;
        a = fib;
        console.log(fib);
    }
}
fibinachi(10);
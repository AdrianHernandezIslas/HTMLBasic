const utils = (()=> {

    const _sumar = (a,b)=> {
        return a+b;
    };

    const _restar = (a,b) => {
        return a-b;
    };

    const _multiplicar = (a,b) => {
        return a*b;
    };

    const _operar = (a,b,funcionOperacionCallback) => {
        debugger;
        return funcionOperacionCallback(a,b);
    };

    const _dividir = (numbers)=>{
        return numbers[0] / numbers[1];
    };

    const _dividirObjecto = (numbers)=>{
        return numbers.dividendo / numbers.divisor;
    };

    const _factorial = (number) => {
        if(number === 1){
            return number;
        }
        return number * _factorial(number-1); 
    };

    return {
        sumar:_sumar,
        restar:_restar,
        factorial:_factorial,
        multiplicar:_multiplicar,
        dividir:_dividir,
        dividirObjecto:_dividirObjecto,
        operar:_operar
    };
})();
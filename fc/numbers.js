'use strict';

exports.isPrimeNumber = function(n){

    if(n < 2) return false;

    for(var i = 2; i <= Math.sqrt(n); i++){
        if(n%i == 0){
            return false;
        }
    }

    return true;
}

exports.primeNumbers = function(){

    // var num = 10;
    // var primes = [];
    // var counter = 0;
    // var i = 2;

    // while(counter < num){
    //     if(exports.isPrimeNumber(i)){
    //         primes.push(i);
    //         counter++;
    //     }
    //     i++;
    // }
    
    // return primes;

    var num = 10;
    var i = 3;
    var j = 2;
    var values = new Array(num+1).fill(0).map(n => new Array(num+1));
    values[0][1] = values[1][0] = 2;
    values[1][1] = 4;

    while(j <= num){
        if(exports.isPrimeNumber(i)){
            values[j][0] = values[0][j] = i;

            for(let k=1;k<=j;k++){
                values[j][k] = values[k][j] = values[k][0]*i;
            }

            j++;
        }
        i+=2;
    }
    
    return values;


}

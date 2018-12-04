'use strict';

const assert = require('assert');
const numbers = require('./numbers');
const products = require('./products');

describe('Multiplication table for prime numbers', function() {
    describe('#isPrimeNumber()', function() {
        it('should return if value is prime number or not', function(){
            assert.equal(numbers.isPrimeNumber(5), true);
            assert.equal(numbers.isPrimeNumber(17), true);
            assert.equal(numbers.isPrimeNumber(18), false);
        });
    });

    describe('#primeNumbers()', function() {
        it('should return first 10 prime numbers', function(){
            assert.equal(numbers.primeNumbers().length, 10);
        });

        it('should return first 10 prime numbers value', function(){
            assert.deepEqual(numbers.primeNumbers(), [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]);
        });

        it('should return first N prime numbers', function(){
            assert.equal(numbers.primeNumbers(3).length, 3);
            assert.equal(numbers.primeNumbers(7).length, 7);
            assert.equal(numbers.primeNumbers(15).length, 15);
        });
    });

    describe('#primeProducts()', function() {
        it('should return products of passes list', function(){
            assert.deepEqual(products.primeProducts([2,3,5]),  [ [ 'N', 2, 3, 5 ],[ 2, 4, 6, 10 ],[ 3, 6, 9, 15 ],[ 5, 10, 15, 25 ] ]);
        });
    });

    describe('#printNumbers()', function() {
        it('should return multiplication table of passed numbers', function(){
            assert.equal(products.printNumbers([ [ 'N', 2, 3, 5 ],[ 2, 4, 6, 10 ],[ 3, 6, 9, 15 ],[ 5, 10, 15, 25 ] ]),  ' N  2  3  5 \n 2  4  6 10 \n 3  6  9 15 \n 5 10 15 25 \n');
        });
    });
});

// when given a number return that number
// unless the number is divisible by 3 then return 'fizz'
// or the number is divisible by 5 then return 'buzz'
// if the number is divisible by 3 and 5 return 'fizzbuzz'

(function(fb) {
    'use strict';

    describe('FizzBuzz', function() {
        describe('Numbers', function() {
            it('returns one for one', function() {
                expect(fb(1)).toBe(1);
            });

            it('retunrs two for two', function() {
                expect(fb(2)).toBe(2);
            });
        });

        describe('Fizz', function() {
            it('returns fizz for 3', function() {
                expect(fb(3)).toBe('fizz');
            });

            it('returns fizz for 6', function() {
                expect(fb(6)).toBe('fizz');
            });
        });

        describe('Buzz', function() {
            it('returns buzz for 5', function() {
                expect(fb(5)).toBe('buzz');
            });
        });
    });
}(module.fizzbuzz));
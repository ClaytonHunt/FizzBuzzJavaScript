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
        });
    });
}(module.fizzbuzz));
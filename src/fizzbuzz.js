var module = module || {};

(function() {
    'use strict';

    module.fizzbuzz = function(x) {
        if(x % 3 === 0) {
            return 'fizz';
        }

        if(x === 5) {
            return 'buzz';
        }

        return x;
    };
}());
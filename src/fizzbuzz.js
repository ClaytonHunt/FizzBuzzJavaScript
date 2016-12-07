var module = module || {};

(function() {
    'use strict';

    module.fizzbuzz = function(x) {
        var result = '';

        if(x % 3 === 0) {
            result += 'fizz';
        }

        if(x % 5 === 0) {
            result += 'buzz';
        }

        return result || x;
    };
}());
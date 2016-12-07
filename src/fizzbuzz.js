var module = module || {};

(function() {
    'use strict';

    module.fizzbuzz = function(x) {
        if(x === 3) {
            return 'fizz';
        }
        
        return x;
    };
}());
angular.module('StupidFilters', [])
.filter('altCaps', function() {
        return function(input) {
            var charArray = input.split('');
            charArray = charArray.map(function(itm,index) {
                return index % 2 === 0 ? itm.toLowerCase(itm) : itm.toUpperCase(itm);
            });
            return charArray.join('');
        };
    });
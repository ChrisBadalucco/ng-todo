angular.module('StupidDirectives', [])
    .directive('sdCompleteColor', function() {
        return {
            restrict: 'A', // A == attribute, E == element
            link: function(scope, element, attrs) {
                scope.$watch(attrs.sdCompleteColor, function(value) {
                    element.css('color', (value ? 'yellow' : 'limegreen'));
                });
            }
        };
});
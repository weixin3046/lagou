'use strict';

angular.module('app').directive('appLoading', function () {
    return {
        restrict: 'EA',
        replace: 'true',
        templateUrl: 'view/template/loading.html'
    }
});
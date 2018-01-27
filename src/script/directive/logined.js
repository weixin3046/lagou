angular.module('app').directive('appLogined', function () {
   return {
       restrict: 'A',
       replace: true,
       templateUrl: 'view/template/logined.html'
   }
});
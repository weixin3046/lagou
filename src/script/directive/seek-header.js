angular.module('app').directive('appSeekheader', function () {
   return {
       restrict: 'AE',
       replace: true,
       templateUrl: 'view/template/seek-header.html',
       scope: {
           data: '='
       }
   }
});
angular.module('app').directive('appList', function () {
   return {
       restrict: 'AE',
       replace: true,
       templateUrl: 'view/template/list.html',
       scope: {
           data: '=',
           filterData:"="
       }
   }
});
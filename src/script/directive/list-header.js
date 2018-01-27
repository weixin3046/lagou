angular.module('app').directive('appListheader', function () {
   return {
       restrict: 'AE',
       replace: true,
       templateUrl: 'view/template/list-header.html',
      controller:function ($scope) {
          $scope.retreat=function () {
              window.history.go(-1)
          }
      }

   }
});
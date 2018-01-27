angular.module('app').directive('appMainfooter', function () {
   return {
       restrict: 'AE',
       replace: true,
       templateUrl: 'view/template/main-footer.html',
       controller:function ($scope,$cookieStore,$state) {
           $scope.btn=function () {
               if($cookieStore.get('user')){
                    $state.go("logined")
               }else{
                    $state.go("primary-login")
               }
           }
       }
   }
});
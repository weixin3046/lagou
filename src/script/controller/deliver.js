'use strict';
angular.module('app').controller('deliver', function ($scope,$rootScope,$http) {
//     $http.get(' https://www.easy-mock.com/mock/5a52256ad408383e0e3868d7/lagou/login').then(function (res) {
//         $scope.data= res.data;
//     });
// $scope.tuichu=function () {
//     $cookieStore.remove('user');
//     $state.go("primary-login")
// }
    $scope.user={
        back:"<",
        headline:"投递记录",
        home:"主页"
    };
    $rootScope.myid="";
    $http.get('https://www.easy-mock.com/mock/5a52256ad408383e0e3868d7/lagou/position-list').then(function (res) {
        $scope.positionliast=res.data;
    });
});
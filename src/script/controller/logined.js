'use strict';
angular.module('app').controller('logined', function ($scope,$http,$state,$cookieStore) {
    $http.get(' https://www.easy-mock.com/mock/5a52256ad408383e0e3868d7/lagou/login').then(function (res) {
        $scope.data= res.data;
    });
$scope.tuichu=function () {
    $cookieStore.remove('user');
    $state.go("primary-login")
}
});
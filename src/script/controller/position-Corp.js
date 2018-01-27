'use strict';
angular.module('app').controller('Corp', function ($scope, $http,$state) {
    $scope.user = {
        back: "<",
        headline: "公司职位",
        home: "主页"
    };
    var id=$state.params.id;
    $http.get(' https://www.easy-mock.com/mock/5a52256ad408383e0e3868d7/lagou/company').then(function (res) {
        $scope.cropa=res.data[id];
    });
    $scope.btnpost=0;
    $scope.btn=function (index) {
        $scope.btnpost=index;
    }
});
'use strict';
angular.module('app').controller('details', function ($scope, $http, $state,$cookieStore) {
    $scope.user = {
        back: "<",
        headline: "公司详情",
        home: "主页",
    };
    var id = $state.params.id;
    $http.get('https://www.easy-mock.com/mock/5a52256ad408383e0e3868d7/lagou/position-detail').then(function (res) {
        $scope.details = res.data[id];
    });
    $scope.denglu=true;
    if($cookieStore.get("user")){
        $scope.denglu=false;
    }else{
        $scope.denglu=true;

    }
    $scope.homea=function () {
        $state.go("login");

    }
});
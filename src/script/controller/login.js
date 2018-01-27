'use strict';
angular.module('app').controller('login', function ($scope, $http, $state, $cookieStore) {

    $scope.user = {
        back: "<",
        headline: "登陆",
        home: "主页",
        phone: "",
        password: ""
    };
    $scope.show = false;
    $scope.num = "注册";
    $scope.log = "登陆";
    $scope.dule = function () {
        if ($scope.log === "登陆") {
            $http.get('https://www.easy-mock.com/mock/5a52256ad408383e0e3868d7/lagou/login').then(function (res) {
                $cookieStore.put("user", {id: $scope.user.phone, name: $scope.user.password});
                $state.go("primary-list");
            })
        } else {
            $scope.num = "注册";
            $scope.log = "登陆";
            $scope.user.phone = "";
            $scope.user.password = "";
            $scope.show = false;
        }
    };
    $scope.cut = function () {
        if ($scope.show === false) {
            $scope.log = "注册";
            $scope.num = "登陆";
            $scope.show = true;
            $scope.user.phone = "";
            $scope.user.password = ""
        }
        else {
            $scope.log = "登陆";
            $scope.num = "注册";
            $scope.user.phone = "";
            $scope.user.password = "";
            $scope.show = false;
        }
    }
});
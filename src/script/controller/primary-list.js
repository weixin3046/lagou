'use strict';
angular.module('app').controller('list', function ($scope,$http,$state,$cookieStore,$rootScope) {
    $http.get('https://www.easy-mock.com/mock/5a52256ad408383e0e3868d7/lagou/position-list').then(function (res) {
        $scope.positionliast=res.data;
    });
    $scope.user={
        back:"",
        headline:"10秒定制职位",
        home:""
    };
    $scope.denglu="去登陆";
    if($cookieStore.get('user')){
        $scope.denglu="你好,同学们";
    }else{
        $scope.denglu="去登陆";
    }
    $scope.add=function () {
        if($cookieStore.get('user')){
            $state.go("logined")
        }else{
            $state.go("primary-login")
        }
    };
    $rootScope.myid="";
});
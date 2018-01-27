angular.module('app').directive('appFiltrate', function ($http) {
    return {
        restrict: 'AE',
        replace: true,
        templateUrl: 'view/template/filtrate.html',
        controller: function ($scope, $rootScope) {

            $scope.city = false;  //隐藏
            $scope.zzc = false;
            //过滤器的参数  收集参数
            $rootScope.obj = {};
            $scope.listbtn = function (dObj) {
                console.log(dObj)
                if (dObj.id && dObj.id !== "undefined"&&dObj.id !== "") {

                    $rootScope.obj[dObj.idName] = dObj.id;
                    console.log(dObj.id+1)
                }
                else {
                    if(dObj.name==="全国"){
                        $rootScope.obj = {};
                    }
                    delete  $rootScope.obj[dObj.idName]

                }
            };
            $scope.city = false;
            $scope.zzc = false;
            $scope.cancel = function () {
                $scope.city = false;
                $scope.zzc = false;
            };
            //城市
            $scope.citya = function () {
                if ($scope.city === true) {   //显示
                    $scope.city = false;
                    $scope.zzc = false;
                } else {
                    $http.get(' https://www.easy-mock.com/mock/5a52256ad408383e0e3868d7/lagou/city').then(function (res) {
                        $scope.data = res.data;
                        $scope.zzc = true;
                    });
                    $scope.city = true;
                }
            };
            // 薪资
            $scope.paya = function () {
                if ($scope.city === true) {   //显示
                    $scope.city = false;
                    $scope.zzc = false;
                } else {
                    $http.get('https://www.easy-mock.com/mock/5a52256ad408383e0e3868d7/lagou/salary').then(function (res) {
                        $scope.data = res.data;
                        $scope.zzc = true;
                    });
                    $scope.city = true;
                }
            };
            // 公司规模
            $scope.scalea = function () {
                if ($scope.city === true) {
                    $scope.city = false;
                    $scope.zzc = false;
                } else {
                    $http.get('https://www.easy-mock.com/mock/5a52256ad408383e0e3868d7/lagou/scale').then(function (res) {
                        $scope.data = res.data;
                        $scope.zzc = true;
                    });
                    $scope.city = true;
                }
            };
        }
    }
});
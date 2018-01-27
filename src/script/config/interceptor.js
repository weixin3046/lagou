'use strict';

angular.module('app').factory('http', function ($q, $rootScope) {
    return {
        // 可选， 拦截成功的请求
        request: function (config) {
            // console.log($cookies.get('name'));
            $rootScope.isLoading = true;    // loading的实现 - 显示
            return config || $q.when(config);
        },
        // 可选， 拦截失败的请求
        requestError: function (rejection) {
            return $q.reject(rejection)
        },
        //可选， 拦截成功的响应
        response: function (response) {
            $rootScope.isLoading = false; // loading的实现 - 隐藏
            return response || $q.when(response);
        },
        // 可选， 拦截失败的响应
        responseError: function (rejection) {
            // 网站报错处理的实现
            switch (rejection.status) {
                case 404:
                    alert('请求地址找不到');
                case 500:
                    alert('服务器出错');
                case 403:
                    alert('无访问权限');
            }
            return $q.reject(rejection);
        }
    }
});
// 将创建的拦截器加入到$httpProvider.interceptors数组中
angular.module('app').config(function ($httpProvider) {
    $httpProvider.interceptors.push('http');
});
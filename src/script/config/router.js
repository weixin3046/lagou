'use strict';
angular.module('app').config(['$stateProvider', '$urlRouterProvider',function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('primary-list', {
            url: '/primary-list',
            templateUrl: 'view/primary -list.html'
        })
        .state('primary-seek', {
            url: '/primary-seek',
            templateUrl: 'view/primary-seek.html'
        })
        .state('primary-login', {
            url: '/primary-login',
            templateUrl: 'view/primary-login.html'
        })
        .state('login', {
            url: '/login',
            templateUrl: 'view/login.html'
        })
        .state('logined', {
            url: '/logined',
            templateUrl: 'view/logined.html'
        })
        .state('Position details', {
            url: '/Position details/:id',
            templateUrl: 'view/Position details.html'
        })
        .state('Position-Corp', {
            url: '/Position-Corp/:id',
            templateUrl: 'view/Position-Corp.html'
        })
        .state('deliver', {
            url: '/deliver',
            templateUrl: 'view/deliver.html'
        });

    $urlRouterProvider.otherwise('primary-list');





}]);

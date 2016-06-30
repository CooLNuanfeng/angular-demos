requirejs.config({
    baseUrl : './lib/',
    paths : {
        'jquery' : ['jquery.2.2.2.min'],  // jQuery 已经 有 amd 规范配置，不再需要shim
        'angular': ['angular.1.5.5.min'],
        'angular-animate' : ['angular-animate']  // angular-animate 已经是 amd规范不需要shim
    },
    shim : {
        // 'jquery' : {
        //     exports : 'jquery'
        // },
        'angular' : {
            exports : 'angular'
        },
        'angular-animate' : {
            deps : ['angular']
        }
    }
});

require(['angular','jquery','angular-animate'],function(angular,$){
    var myApp = angular.module('myApp',['ngAnimate']);
    myApp.controller('formController',['$scope',function($scope){
        $scope.formInfo = {
            'email' : '1634898698@qq.com',
            'password' : 1634898698,
            'remember' : true
        };
        $scope.getInfo = function(){
            console.log($scope.formInfo);
        };
        $scope.setInfo = function(){
            $scope.formInfo.email = 'blue@126.com';
            $scope.formInfo.password = 'blue';
            $scope.formInfo.remember = false;
        };
        $scope.resetInfo = function(){
            $scope.formInfo.email = '';
            $scope.formInfo.password = '';
            $scope.formInfo.remember = false;
        }
    }]);

    myApp.controller('myController',['$scope',function($scope){
        $scope.color = '';
        $scope.toGreen = function(){
            $scope.color = 'green';
            $scope.isGreen = true;
        }
        $scope.toBlue = function(){
            $scope.color = 'blue';
        }
        $scope.toRed = function(){
            $scope.color = 'red';
            $scope.isFont = true;
        }
        $scope.toBlack = function(){
            $scope.color = 'black';
            $scope.isFont = false;
            $scope.isGreen = false;
        }
    }]);

    myApp.controller('divController',['$scope',function($scope){
        $scope.toWidth = function(){
            $scope.change = 'toWidth';
        }
        $scope.toHeight = function(){
            $scope.change = 'toHeight';
        }
        $scope.toReset = function(){
            $scope.change = 'toReset';
        }
    }]);
})

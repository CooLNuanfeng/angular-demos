requirejs.config({
    baseUrl : './lib',
    paths : {
        'jquery' : ['jquery.2.2.2.min.js'],
        'angular' : 'angular.1.5.5.min',
        'ui-router' : 'angular-ui-router'
    },
    shim : {
        'angular' :{
            exports : 'angular'
        },
        'ui-router' : {
            deps : ['angular']
        }
    }
});

require(['angular','ui-router'],function(angular){
    var myApp = angular.module('myApp',['ui.router']);

    myApp.config(['$stateProvider', '$urlRouterProvider',function($stateProvider,$urlRouterProvider){
        //所有不匹配的url都执行下面
        //$urlRouterProvider.otherwise('/state1');

        //设置不同的状态对应不同的路由
        $stateProvider.state('state1',{
            url : '/state1',
            templateUrl : './template/state1.html'
        }).state('state1.list',{
            url : '/list?appid&user',
            //url: '/list',
            //params:{
            // appid : null,
            // user : null   
            //}
            templateUrl : './template/state1.list.html',
            controller : function($scope,$stateParams){
                console.log($stateParams);
                $scope.items = ['html','css','javascript'];
            }
        }).state('state2',{
            url : '/state2',
            templateUrl : './template/state2.html'
        }).state('state2.list',{
            url : '/list',
            templateUrl : './template/state2.list.html',
            controller : function($scope){
                $scope.things = ['nodejs','php','c++']
            }
        })

    }]);

});

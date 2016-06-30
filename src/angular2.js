requirejs.config({
  baseUrl: './lib',
  paths: {
    'jquery': ['jquery.2.2.2.min'],
    'angular': ['angular.1.5.5.min'],
    'angular-route': ['angular-route']
  },
  shim: {
    // 'jquery': {
    //   exports: 'jquery'  // jquery 本身已符合 AMD规范 不需要 配置
    // },
    'angular': {
      exports: 'angular'
    },
    'angular-route': {
      //exports: 'ngRoute',  // angular-route 本身已符合 AMD规范 不需要 配置
      deps: ['angular'] //配置依赖 angular deps 参数必须为数组格式
    }
  }
});


requirejs(['angular','angular-route'],function(angular){
    var bookStore = angular.module('bookStore',['ngRoute']);

    bookStore.config(['$routeProvider',function($routeProvider){
        $routeProvider.when('/hello',{
            templateUrl : 'template/head.html',
            controller : 'bookCtrller1'
        }).when('/list',{
            templateUrl : 'template/list.html',
            controller : 'bookCtrller2'
        }).otherwise({
            templateUrl : 'template/head.html',
            controller : 'bookCtrller1'
        })
    }]);

    bookStore.controller('bookCtrller1',['$scope',function($scope){
        $scope.text = 'hello';
    }]);

    bookStore.controller('bookCtrller2',['$scope',function($scope){
        $scope.bookArr = [
            {'name':'《Javascript高级程序设计》','author':'blue'},
            {'name':'《Nodejs入门》','author':'blue'},
            {'name':'《HTML5+CSS3》','author':'blue'},
        ]
    }]);
});

requirejs.config({
    baseUrl : './lib',
    paths : {
        'jquery' : 'jquery.2.2.2.min',
        'angular' : 'angular.1.5.5.min'
    },
    shim : {
        'angular' : {
            exports : 'angular'
        }
    }
});

require(['angular','jquery'],function(angular,$){
    var angular = angular.module('myApp',[]);

    angular.controller('myFromCtrl',['$scope',function($scope){
        $scope.passreg = '\\w+';
    }]);
});

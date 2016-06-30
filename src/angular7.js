requirejs.config({
    baseUrl : './lib',
    paths : {
        'jquery' : ['jquery.2.2.2.min'],
        'angular' : ['angular.1.5.5.min']
    },
    shim : {
        'angular' : {
            exports : 'angular'
        }
    }
});

define(['angular','jquery'],function(angular,$){
    var myApp = angular.module('myApp',[]);

    myApp.controller('myCtrl',['$scope',function($scope){
        $scope.personInfo = {
            'name' : 'blue',
            'address' : 'shanghai'
        }
        $scope.otherinfo = {
            'name' : 'jack',
            'address' : 'beijing'
        }
        $scope.show = function(){
            console.log($scope.personInfo.name);
            console.log($scope.otherInfo.name);
        }
    }]);
    myApp.directive('myCustom',function(){
        return {
            restrict : 'AE',
            scope : {
                'customInfo' : '=info',
                'showName' : '&fn',
                'otherinfo' : '='    // 属性不支持驼峰，大些等
            },
            templateUrl : 'my-custom'
        }
    })
});

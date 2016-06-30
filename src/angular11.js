requirejs.config({
    baseUrl : './lib',
    paths : {
        'jquery' : 'jquery.2.2.2.min',
        'angular':'angular.1.5.5.min'
    },
    shim : {
        'angular' : {
            'exports' : 'angular'
        }
    }
});

define(['angular','jquery'],function(angular,$){
    var myApp = angular.module('myApp',[]);

    myApp.controller('myCtrl',['$scope',function($scope){
        $scope.name = 'blue';
        $scope.count = 0;
        $scope.$watch('name',function(newValue,oldValue){
            if(newValue > 10){return;}
            $scope.count++;
        })
    }]);
});


//$apply 与 $watch
//AngularJS 外部的控制器（DOM 事件、外部的回调函数如 jQuery UI 空间等）调用了AngularJS 函数之后，必须调用$apply。在这种情况下，你需要命令 AngularJS 刷新自已（模型、视图等），$apply就是用来做这件事情的。我们在使用$apply这个方法的时候，只要可以，请把要执行的代码和函数传递给$apply 去执行，而不要自已执行那些函数然后再调用$apply。

//当你的数据模型中某一部分发生变化时，$watch 函数可以向你发出通知。你可以监控单个对象的属性，也可以监控需要经过计算的结果（函数），实际上只要能够被当作属性访问到，或者可以当作一个JavaScript 函数被计算出来，就可以被$watch 函数监控。

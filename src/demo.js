var myModel = angular.module('myApp',[]);
myModel.controller('textCtrl',['$scope','$location',function($scope,$location){
    $scope.text = 'Hello';
    console.log($location);
    $scope.getHtml = function(){
        console.log('sss');
    }
}]);
//依赖注入
myModel.value('initCount',6);
myModel.factory('square',function(){
    return function(number){
        return number * number;
    }
});

myModel.controller('textCtrl2',['$scope','initCount','square',function($scope,initCount,square){
    $scope.textValue = '请输入内容';
    $scope.getName = function(){
        console.log(square(initCount));
    }
}]);

myModel.directive('angular',function(){
    return {
        'restrict' : 'E',
        'template' : '<h1>Hello world</h1>',
        'replace' : true,
        'link' : function(scope,element,attr){
            console.log(scope,element,attr);
            element.on('click',function(){
                console.log('click');
            })
        }
    }
});

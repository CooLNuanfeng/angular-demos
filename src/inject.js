var myApp = angular.module('myApp',[]);

myApp.provider('sayHello',function(){
    this.$get = function(){
        return 'say : hello world'
    }
});

myApp.factory('writeHello',function(){
    return {
        write : 'write : hello world'
    }
})

// 方法一
angular.injector(['myApp']).invoke(['sayHello',function(say){
    console.log(say);
}]);

// 方法二
var w = angular.injector(['myApp']).get('writeHello');
console.log(w.write);


myApp.controller('myController',['$scope','$filter',function($scope,$filter){
    var nowTimer = new Date();
    $scope.date = nowTimer;
    $scope.dateFilter = $filter('date')(nowTimer,'yyyy-MM-dd HH:mm:ss');
}])

var myApp = angular.module('myApp',[]);

myApp.controller('myController',['$scope',function($scope){
    $scope.count = 0;
    $scope.$on('myEvent',function(){
        $scope.count++;
    })
}]);

myApp.controller('timeController',['$scope',function($scope){
    $scope.date = new Date();
    setInterval(function(){
        $scope.$apply(function(){
            $scope.date = new Date();
        })
    },1000);
}]);

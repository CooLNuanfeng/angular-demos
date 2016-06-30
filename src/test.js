var listApp = angular.module('myApp',[]);
listApp.controller('listTask',['$scope',function($scope){
    $scope.tasks = [];
    $scope.add = function(){
        $scope.tasks.push($scope.task);
        $scope.task = '';
    }
}]);

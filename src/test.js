var listApp = angular.module('myApp',[]);
listApp.controller('listTask',['$scope',function($scope){
    $scope.tasks = [];
    $scope.add = function(){
        $scope.tasks.push($scope.task);
        $scope.task = '';
    }
}]);

listApp.controller('OuterCtrl',['$scope',function($scope){
    $scope.data = {};
    $scope.data.x = 'hello';
}]);
listApp.controller('InnerCtrl',['$scope',function($scope){

}]);

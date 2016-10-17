var myApp = angular.module('myApp',[]);

myApp.controller('myCtrl',['$scope',function($scope){
    $scope.info = 'hello angular';
    $scope.count = '0';
    $scope.clickFn = function(){
        var number = parseInt('123');
        console.log(number);
    };
}]);


myApp.controller('tabCtrl',['$scope',function($scope){
    $scope.tab = 'left';
}]);


myApp.controller('parentCtrl',['$scope',function($scope){
    $scope.$on('toParent',function(a,b){
        console.log(a,b,'parent');
        $scope.$broadcast('toBroth','send to brother');
    });
}]).controller('selfCtrl',['$scope',function($scope){
    $scope.toChild = function(){
        $scope.$broadcast('toChild',{value:'send to child'});
    };
    $scope.toParent = function(){
        $scope.$emit('toParent','send to parent');
    };
}]).controller('childCtrl',['$scope',function($scope){
    $scope.$on('toChild',function(a,b){
        console.log(a,b,'child');
    });
}]).controller('borthCtrl',['$scope',function($scope){
    $scope.$on('toBroth',function(a,b){
        console.log(a,b,'brother');
    });
}]);

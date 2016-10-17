var listApp = angular.module('myApp',[]);
listApp.controller('listTask',['$scope',function($scope){
    $scope.tasks = [];
    $scope.add = function(){
        $scope.tasks.push($scope.task);
        $scope.task = '';
    };
    $scope.tableData = ['hello','blue','angular'];
    $scope.reset = function(){
        console.log('reset');
        $scope.selectClass = false;
    };
}]);

listApp.controller('OuterCtrl',['$scope',function($scope){
    $scope.data = {};
    $scope.data.x = 'hello';
}]);
listApp.controller('InnerCtrl',['$scope',function($scope){

}]);


listApp.directive('myTd',function(){
    return {
        restrict : 'A',
        link : function(scope,elem){
            $(elem).on('click',function(){
                if($(this).hasClass('selected')){
                    $(this).removeClass('selected');
                }else{
                    $(this).addClass('selected');
                }
            });
        }
    };
});

var myApp = angular.module('myApp',[]);
myApp.controller('myCtrl',['$scope','$rootScope',function($scope,$rootScope){

    $scope.tableData = ['hello','blue','angular'];

    $scope.reset = function(){
        console.log('reset');
        $rootScope.$broadcast('resetTable');
    };

}]).directive('myTd',function(){
    return {
        restrict : 'A',
        link : function(scope,elem){
            $(elem).on('click',function(){
                if($(this).hasClass('active')){
                    $(this).removeClass('active');
                }else{
                    $(this).addClass('active');
                }
            });

            scope.$on('resetTable',function(){
                $('.table td').removeClass('active');
            });
        }
    };
});

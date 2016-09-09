angular.module('myApp',[]).controller('myCtroller',['$scope',function($scope){
    $scope.date = 'date';
    $scope.time = 'time';
    $scope.number = 1.23;

    //方法一
    setTimeout(function(){
        $scope.date = new Date();
        $scope.time = new Date();
        console.log($scope);
        $scope.$digest();  //触发 scope 改变view
    },2000);

    //方法二
    // setTimeout(function(){
    //     $scope.$apply(function(){
    //         $scope.date = new Date();
    //         $scope.time = new Date();
    //     });
    //     console.log($scope);
    // },2000);


    $scope.$watch('date',function(newV,oldV){
        console.log('new: '+newV);
        console.log('old: '+oldV);
    });

}]);

//使用angular 内置的服务 就不需要 $apply 或 $digest 来触发了
// angular.module('myApp',[]).controller('myCtroller',['$scope','$timeout',function($scope,$timeout){
//     $scope.date = 'date';
//     $scope.time = 'time';
//
//     $timeout(function(){
//         $scope.time = new Date();
//         $scope.date = new Date();
//     },2000);
//
//     $scope.$watch('date',function(newV,oldV){
//         console.log('new: '+newV);
//         console.log('old: '+oldV);
//     });
// }]);

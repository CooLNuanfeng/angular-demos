requirejs.config({
    baseUrl : './lib',
    paths : {
        'jquery' : 'jquery.2.2.2.min',
        'angular' : 'angular.1.5.5.min'
    },
    shim : {
        'angular' : {
            exports : 'angular'
        }
    }
});

require(['angular','jquery'],function(angular,$){
    var myApp = angular.module('myApp',[]);

    myApp.controller('searchCtrl',['$scope','$http','$timeout',function($scope,$http,$timeout){
        var timer = null;
        $scope.searchTxt = '';
        $scope.data = null;
        $scope.searchFn = function(){
            if(timer){
                $timeout.cancel(timer);
            }
            timer = $timeout(function(){
                $http({
                    url : './data/json.php',
                    method : 'post',
                    data : {'search' : $scope.searchTxt}
                }).then(function(res){
                    $scope.data = res.data;
                    console.log(res);
                },function(err) {
                    console.log(err);
                })
            },500);
        }

    }]);
});

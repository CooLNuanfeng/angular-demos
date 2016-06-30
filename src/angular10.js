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

define(['angular','jquery'],function(angular,$){
    var myApp = angular.module('myApp',[]);

    myApp.factory('getUsers',['$http',function($http){
        var getUsers = function(searchTxt){
            return $http({
                url : './data/json.php',
                method : 'post',
                data : {'searchTxt' : searchTxt}
            });
        }
        return {
            getUsers : getUsers,
            commonValue : 'hello angular'
        }
    }]);
    // 通过factory  service 实现不同 控制器之间的数据共享
    myApp.controller('myCtrl',['$scope','getUsers',function($scope,getUsers){
        $scope.searchFn = function(){
            console.log(getUsers.commonValue,'contrller');
            getUsers.getUsers($scope.searchTxt).then(function(res){
                $scope.users = res.data
                console.log(res);
            },function(err){
                console.log(err);
            });
        }
    }]);

    myApp.controller('myCtrl2',['$scope','getUsers',function($scope,getUsers){
        $scope.txt = 'test';
        $scope.look = function(){
            console.log(getUsers.commonValue,'contrller 2');
            $scope.txt = getUsers.commonValue;
        }
    }]);

    //自定义 filter
    myApp.filter('myfilter',function(){
        return function(item){
            return item + ', haha';
        }
    })
})

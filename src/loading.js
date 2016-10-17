var myApp = angular.module('myApp',[]);


myApp.config(['$httpProvider',function($httpProvider){
    //所有请求添加header配置
    $httpProvider.interceptors.push('HttpInterceptor');

}]);


myApp.controller('myCtrl',['$scope','$http',function($scope,$http){

    $scope.get = function(){
        $http({
            url : './data/loading.php?search='+$scope.search,
            method : 'get'
        }).then(function(res){
            console.log(res);
        });
    };
}]);

myApp.directive('loading',function(){
    return {
        link : function(scope,elem,attr){
            scope.$on('activeLoading', function(){
                elem.css('display','block');
            });
            scope.$on('disActiveLoading', function(){
                elem.css('display','none');
            });
            elem.css('display','none');
        }
    };
});


myApp.factory('HttpInterceptor',['$q','$rootScope',function($q,$rootScope){
    return {
        // 请求发出之前，可以用于添加各种身份验证信息
        request: function(config) {
            //只对 请求中还有 指定字符的 不 加载 loading 
            if(config.url.indexOf('search=blue')>0){
                console.log('blue searching');
                $rootScope.$broadcast('disActiveLoading');
            }else{
                $rootScope.$broadcast('activeLoading');
            }
            return config;
        },
        // 请求发出时出错
        requestError: function(err) {
            ////console.log('request config error');
            $rootScope.$broadcast('disActiveLoading');
            return $q.reject(err);
        },
        // 成功返回了响应
        response: function(res) {
            $rootScope.$broadcast('disActiveLoading');
            return res;
        },
        // 返回的响应出错，包括后端返回响应时，设置了非 200 的 http 状态码
        responseError: function(err) {
            ////console.log('response config error');
            $rootScope.$broadcast('disActiveLoading');
            return $q.reject(err);
        }
    };
}]);

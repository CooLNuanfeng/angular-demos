var myApp = angular.module('myApp',['ui.router']);

myApp.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){

    $urlRouterProvider.otherwise('/home/list');

    $stateProvider.state('home',{
        url : '/home',
        templateUrl : './template/bstHome.html',
        resolve : {   // resolve  是在 控制器注入之前先执行 ，为键值对格式 ，返回的值可以注入到当前控制器或子控制器中
            parentRes : function(){
                return {
                    text : 'form: Parent Home text'
                }
            }
        }
    }).state('home.list',{
        url: '/list',
        templateUrl : './template/bstList.html',
        controller :  function($scope){
            $scope.items = ['aa','bb','cc']
        }
    }).state('home.content',{
        url : '/content',
        templateUrl : './template/bstContent.html',
        controller : function($scope,parentRes,resA){
            $scope.context = 'Here is content in Home';
            $scope.parentText = parentRes.text
            $scope.serverData = resA.data
        },
        resolve : {
            resA : function(serverdata){   //通过 resolve 和自定义服务 可以在 controller 加载之前先获取服务数据，提高页面加载速度
                return {
                    data : serverdata.data
                }
            }
        }
    }).state('about',{
        url : '/about',
        views : {
            '' : {
                templateUrl: './template/bstAbout.html'
            },
            'aa@about':{
                templateUrl : './template/aa.html'
            },
            'bb@about':{
                templateUrl : './template/bb.html'
            }
        }
    })
}]);


myApp.directive('tabActive',['serverdata',function(serverdata){
    return {
        restrict : 'A',
        link : function(scope,elem) {
            console.log(serverdata.data);
            $(elem).on('click',function(){
                $(this).addClass('active').siblings('li').removeClass('active');
            })
        }
    }
}]);

myApp.factory('serverdata',function(){
    //自定义服务 获取服务器中的数据
    // $http
    return {
        data : 'haha,This is from server data'
    }
})

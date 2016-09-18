var myApp = angular.module('myApp',['ui.router']);

myApp.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){

    $urlRouterProvider.otherwise('/home/list');

    $stateProvider.state('home',{
        url : '/home',
        templateUrl : './template/bstHome.html'
    }).state('home.list',{
        url: '/list',
        templateUrl : './template/bstList.html',
        controller :  function($scope){
            $scope.items = ['aa','bb','cc']
        }
    }).state('home.content',{
        url : '/content',
        templateUrl : './template/bstContent.html',
        controller : function($scope){
            $scope.context = 'Here is content in Home'
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


myApp.directive('tabActive',function(){
    return {
        restrict : 'A',
        link : function(scope,elem) {
            $(elem).on('click',function(){
                $(this).addClass('active').siblings('li').removeClass('active');
            })
        }
    }
})

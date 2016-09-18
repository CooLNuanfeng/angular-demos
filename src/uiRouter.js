var myApp = angular.module('myApp',['ui.router']);

myApp.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
    // 视图 嵌套
    // $urlRouterProvider.otherwise('/index/inner1');
    //
    // $stateProvider.state('index',{
    //     url : '/index',
    //     templateUrl : './template/uiRouterMain.html'
    // })
    // .state('index.inner1',{
    //     url : '/inner1',
    //     templateUrl : './template/uiRouterInner1.html'
    // })
    // .state('index.inner2',{
    //     url : '/inner2',
    //     templateUrl : './template/uiRouterInner2.html'
    // })

    //多视图
    // $urlRouterProvider.otherwise('/index/page');
    // $stateProvider.state('index',{
    //     url : '/index',
    //     templateUrl : './template/uiRouterMain.html'
    // }).state('index.page',{
    //     url : '/page',
    //     views : {
    //         'aa' : {
    //             templateUrl : './template/aa.html'
    //         },
    //         'bb' : {
    //             templateUrl : './template/bb.html'
    //         }
    //     }
    // })


    //结合
    $urlRouterProvider.otherwise('/index/inner1');

    $stateProvider.state('index',{
        url : '/index',
        templateUrl : './template/uiRouterMain.html'
    })
    .state('index.inner1',{
        url : '/inner1',
        templateUrl : './template/uiRouterInner1.html'
    })
    .state('index.inner2',{
        url : '/inner2',
        templateUrl : './template/uiRouterInner2.html',
        params : {
            'dataMessage' : 'HELLO INNER2.THML'
        }
    }).state('index.page',{
        url : '/page',
        views : {
            'aa@index' : {
                templateUrl : './template/aa.html'
            },
            'bb' : {
                templateUrl : './template/bb.html'
            }
        }
    })

}]);

// 视图 嵌套
myApp.controller('myCtrl',['$scope',function($scope){
    $scope.text = 'Main'
}]).controller('innerCtrl1',['$scope',function($scope){
    $scope.text = "Inner 1"
}]).controller('innerCtrl2',['$scope','$stateParams','$state',function($scope,$stateParams,$state){
    $scope.text = "Inner 2";
    $scope.message = $stateParams.dataMessage;
    console.log($stateParams);
    console.log($state.current);
    console.log($state);
}]);


myApp.directive('listSelected',function(){
    return {
        restrict : 'A',
        link : function(scope,elem,attr){
            $(elem).on('click',function(ev){
                $(elem).siblings('li').removeClass('active');
                $(this).addClass('active');
            })
        }
    }
})

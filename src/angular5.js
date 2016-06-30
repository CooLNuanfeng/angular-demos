requirejs.config({
    baseUrl : './lib',
    paths : {
        'jquery':'jquery.2.2.2.min',
        'angular':'angular.1.5.5.min',
        'ui-router':'angular-route'
    },
    shim : {
        'angular':{
            exports : 'angular'
        }
    }
});

define(['angular','jquery'],function(angular,$){
    var myApp = angular.module('myApp',[]);

    myApp.controller('myController',['$scope',function($scope){
        $scope.persons = null;
        $scope.getPersonData = function(){
            console.log('aa');
            $scope.persons = [
                {id:1,name:'blue',job:'javascript'},
                {id:2,name:'jack',job:'java'},
                {id:3,name:'luccy',job:'css'}
            ]
        }
        $scope.clear = function() {
            $scope.persons = null;
        }
    }]);

    myApp.controller('myController2',['$scope',function($scope){
        $scope.clear = function(){
            $scope.products = null;
        }
        $scope.getProData = function(){
            $scope.products = [
                {'code':'00123','name':'iphone6s','count':60},
                {'code':'00135','name':'mac pro','count':50},
                {'code':'00123','name':'iwatch','count':30},
            ]
        }
    }])

    myApp.directive('myTable',function(){
        return {
            'restrict' : 'AE',
            'template' : '<button class="btn btn-info">获取数据</button>',
            //'templateUrl' : './template/table.html',
            //'replace' : false,
            //'transclude' : true,
            // link : function(scope,element,attr){
            //     $(element).on('click',function(){
            //         $(element).html('<button class="btn btn-info">获取数据中...</button>');
            //         setTimeout(function(){
            //             $(element).html('<button class="btn btn-info">获取数据</button>');
            //             scope.$apply('getPersonData()')
            //         },2000);
            //     })
            // }
            link : function(scope,element,attr){
                $(element).on('click',function(){
                    $(element).html('<button class="btn btn-info">获取数据中...</button>');
                    var methodString = attr.method;
                    console.log(methodString);
                    setTimeout(function(){
                        $(element).html('<button class="btn btn-info">获取数据</button>');
                        scope.$apply(methodString)
                    },2000);

                });
            }
        }
    });

    myApp.controller('myController3',['$scope',function($scope){
        $scope.arr = [1,2];
    }]);

    myApp.directive('myRepeat',function(){
        return {
            restrict : 'A',
            compile : function(element,attrs,transclude){
                console.log('compile 执行一次');
                var child = element.children();
                var repeatCount = attrs.myRepeat;
                for(var i=0; i<repeatCount;i++){
                    element.append(child.clone());
                }
                // compile 函数要求返回一个函数 而该函数即为link 函数， compile与link同时存在是只执行compile函数
                return function(scope,element,attrs,parentCtrl){
                    console.log('link 函数 执行二次');
                }
            },
            link : function(){
                console.log('complie存在，固link函数不执行');
            }
        }
    });

});





/*
directive 分 三个阶段  加载阶段（初始化 ng-app等） 编译阶段（遍历dom，指令 根据 template transclude 等转换dom ,如果有compile函数则执行）  链接阶段（对每个指令执行link函数，link函数通常用来操作dom，绑定事件等)
1、directive 设置 transclude 时，默认 replace 会为 false ，如果replace 设置为true 则会出错
2、compile 函数用来对模板自身进行转换 link 函数负责在模板和视图之间进行动态关联
3、作用域在链接阶段才会被绑定到编译之后的link函数
4、compile 只会在编译阶段执行一次，而 对每个指令实例，link函数都会执行一次
5、compile 会返回 preLink和postLink函数,而link 函数只返回 postLink函数
6、如果修改DOM结果需要在postLink中，如果在preLink则会出错
*/

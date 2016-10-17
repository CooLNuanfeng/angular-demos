
angular.module("myApp", []).controller("MyController", function ($scope) {
    $scope.name = "dreamapple";
    $scope.age = 20;
    $scope.title = 'tab表头 pannel tab';
    $scope.text = '这里是内容';
    $scope.changeAge = function(age){
        $scope.age = age;
    }
}).directive("myDirective", function () {
    var obj = {
        restrict: "AE",
        scope: {
            name: '@myName',
            age: '=',
            changeAge: '&changeMyAge'
        },
        replace: true,
        templateUrl : 'template/scope.html',
        //template: "<div class='my-directive'>" +
            // "<h3>下面部分是我们创建的指令生成的</h3>" +
            // "我的名字是：<span ng-bind='name'></span><br/>" +
            // "我的年龄是：<span ng-bind='age'></span><br/>" +
            // "在这里修改名字：<input type='text' ng-model='name'><br/>" +
            // "在这里修改年龄：<input type='text' ng-model='setage'><br/>" +
            // "确定要设置年龄为：{{setage}} ?  "+
            // "<button ng-click='changeAge({age:setage})'>确定</button>" +
            // " </div>",
        link: function(scope,element,attr,parentCtrl){
            if(!scope.setage){
                scope.setage = '未设置';
            }
            element.on('mouseover',function(){
                console.log(scope.setage);
            });
        }
    };
    return obj;
}).directive('exprend',function(){
    return {
        restrict : 'AE',
        scope : {
            title : '=tabTitle',
        },
        replace : true,
        transclude : true,
        template : '<div class="panel panel-primary" ng-click="toggle()"><div class="panel-heading">{{title}}</div><div ng-show="showMe" ng-transclude></div></div>',
        link : function(scope,element,attrs){
            scope.showMe = false;
            scope.toggle = function(){
                scope.showMe = !scope.showMe;
            };
        }
    };
});

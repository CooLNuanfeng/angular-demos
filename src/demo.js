var myModel = angular.module('myApp',[]).config(function($provide,$compileProvider,$filterProvider,movieProvider){
    movieProvider.setVersion('0.0.1');
    $provide.value('sqnum',2);
    $filterProvider.register('addfilter',function(){
        return function(str){
            return str + '^_^';
        }
    })
});
myModel.controller('textCtrl',['$scope','$location','movie',function($scope,$location,movie){
    $scope.text = 'Hello';
    $scope.version = movie.version;
    console.log($location);
    $scope.getHtml = function(){
        console.log('sss');
    }
}]);
//依赖注入
myModel.value('initCount',6);
myModel.factory('square',function(){
    return function(number){
        return number * number;
    }
});

myModel.factory('ageCount',function(){
    return {
        age : 23
    }
});


myModel.provider('movie',function(){
     this.version = '';
     this.setVersion = function(v){
         console.log(v)
         this.version = v
     }
     this.$get = function(){
         return {
             version : 'this version is '+ this.version
         }
     }
});


myModel.controller('textCtrl2',['$scope','initCount','square','sqnum','ageCount',function($scope,initCount,square,sqnum,ageCount){
    $scope.textValue = '请输入内容';
    $scope.getName = function(){
        ageCount.age++;
        console.log(ageCount.age);
        console.log(square(initCount));
        console.log(square(sqnum));
    }
}]);

myModel.directive('angular',function(){
    return {
        'restrict' : 'E',
        'template' : '<h1>Hello world</h1>',
        'replace' : true,
        'link' : function(scope,element,attr){
            console.log(scope,element,attr);
            element.on('click',function(){
                console.log('click');
            })
        }
    }
});

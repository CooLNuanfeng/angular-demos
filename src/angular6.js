requirejs.config({
    baseUrl : './lib',
    paths : {
        'jquery' : 'jquery.2.2.2.min',
        'angular':'angular.1.5.5.min',
    },
    shim :{
        'angular' :{
            exports : 'angular'
        }
    }
});

require(['angular','jquery'],function(angular,$){
    var myApp = angular.module('myApp',[]);

    myApp.directive('myParent',function(){
        return {
            scope : {},
            restrict : 'AE',
            controller : function($scope){
                $scope.itemArr = [];
                this.addItem = function(){
                    console.log('addItem');
                    $scope.itemArr.push('add');
                };
                this.modifyItem = function(){
                    console.log('modifyItem');
                    $scope.itemArr.push('modify');
                };
                this.deleteItem = function(arg){
                    console.log('deleteItem');
                    $scope.itemArr.push('delete')
                }
            },
            link : function(scope,element,attr){
                $(element).addClass('btn btn-primary')
                $(element).on('click',function(){
                    console.log('myParent clicked');
                    console.log(scope.itemArr);
                });
            }
        }
    });

    myApp.directive('myAdd',function(){
        return {
            require : '^myParent',
            link : function(scope,element,attr,parentCtrl){
                parentCtrl.addItem();
            }
        }
    });
    myApp.directive('myModify',function(){
        return {
            require : '^myParent',
            link : function(scope,element,attr,parentCtrl){
                parentCtrl.modifyItem();
            }
        }
    });
    myApp.directive('myDelete',function(){
        return {
            require : '^myParent',
            link : function(scope,element,attr,parentCtrl){
                parentCtrl.deleteItem(scope.test);
            }
        }
    });
});

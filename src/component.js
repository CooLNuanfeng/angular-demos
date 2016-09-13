angular.module('myApp',[]).component('myComponent',{
    bindings:{},
    controller : function(){
        this.$onInit = function(){
            console.log('aa');
        }
    }
}).component('tabs',{
    bindings:{
        selected : '@'
    },
    transclude : true,
    templateUrl : './template/tabs.html',
    controller : function(){
        this.$onInit = function(){
            this.tabs = []
        }
        this.addTab = function(tab){
            if(this.tabs.length===0){
                this.tabs.push(tab);
                this.selectTab(tab);
            }else{
                this.tabs.push(tab);
            }
        }
        this.selectTab = function(tab){
            for(var i=0;i<this.tabs.length; i++){
                this.tabs[i].selected = false;
            }
            tab.selected = true;
            console.log(tab);
        }
    }
}).component('tab',{
    bindings : {
        label : '@'  // @ 字符串
    },
    require : {
        tabs : '^^tabs'
    },
    templateUrl : './template/tab.html',
    transclude: true,
    controller :function(){
        this.$onInit = function(){
            this.tab = {
                label : this.label,
                selected : false
            }
            this.tabs.addTab(this.tab);
        }
    }
});

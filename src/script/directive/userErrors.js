app.directive('userErrors',['$compile',function ($compile) {
    return {
        require:'ngModel',
        restrict:'A',
        link:function (scope,element,attrs,ngModel) {
            //动态生成DOM元素并自动插入到input框的后面
            var subScope = scope.$new(true);//创建一个独立的子scope，不会继承scope的任何属性\
            //判断字段输入是否合法
            subScope.hasError = function () {
                return ngModel.$dirty && ngModel.$invalid;
            };
            //得到错误对象
            subScope.errors = function () {
                return ngModel.$error;
            };
            var temp = $compile('<p ng-repeat="(key,val) in errors()" class="help-block" ng-show="hasError()" style="color:red">{{key | error}}</p>');
            var tips = temp(subScope);//模板和subScope进行连接,得到一个jQuery对象，就是p标签的jQuery对象
            element.parent().after(tips);
        }
    }
}]);
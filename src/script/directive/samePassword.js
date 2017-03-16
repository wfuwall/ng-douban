//定义一个指令，实现密码与确认密码的校验
app.directive('samePassword',[function () {
    return {
        require:'ngModel',//samePassword依赖于ngModel指令
        link:function (scope,element,attrs,ngModel) {
            //每一个属性代表一个验证器
            ngModel.$validators.validSame = function (modelValue,viewValue) {
                var val = viewValue || modelValue;
                return val == scope.$eval(attrs['samePassword'])
            };
            scope.$watch(function () {
                return scope.$eval(attrs['samePassword']);
            },function (newValue,oldValue) {
                //设置字段值得有效性
                ngModel.$setValidity('validSame',scope.$eval(attrs['samePassword']) == scope.surePassword)
            })
        }
    }
}]);
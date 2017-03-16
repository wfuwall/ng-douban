app.filter('error',['errors',function (errors) {//注入服务
    return function (key) {
        return errors[key];
    }
}]);
app.controller('loginCtrl',['$scope','local','$location',function ($scope,local,$location) {
    $scope.haha = 'hah';
    $scope.loginEvent = function (url) {
        var userAry = local.getObject('user');//去除缓存
        //循环比较，看用户名和密码是否输入正确
        for(var i = 0; i< userAry.length; i++){
            if($scope.username == userAry[i].name && $scope.password == userAry[i].password){
                $scope.nameError = false;
                $scope.$emit('success',{url:url,name:$scope.username});
            }else{
                $scope.nameError = true;
            }
        }
    }
}]);
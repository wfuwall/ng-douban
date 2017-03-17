app.controller('registerCtrl',['$scope','local','$location',function ($scope,local,$location) {
    var userObj = {};
    $scope.registerEvent = function (url) {
        userObj.name = $scope.username;
        userObj.password = $scope.password;
        userObj.surePassword = $scope.surePassword;
        userObj.email = $scope.email;
        var user = local.getObject('user');
        if(Object.prototype.toString.call(user) == "[object Object]"){
            user = [];
        }
        user.push(userObj);
        local.setObject('user',user);
        $location.path(url);
    };
    console.log(local.getObject('user'));
}]);
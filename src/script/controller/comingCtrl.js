app.controller('comingCtrl', ['$rootScope', '$scope', '$http', function ($rootScope, $scope, $http) {
    $http.get('data/coming.json').then(function (res) {
        res.data.forEach(function (item) {
            item.starsAry = $rootScope.starsToImage(item.stars);
        });
        $scope.movies = res.data;
    });
}]);
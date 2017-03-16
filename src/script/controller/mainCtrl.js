app.controller('mainCtrl', ['$rootScope', '$scope', '$http', function ($rootScope, $scope, $http) {
    $http.get('data/theaters.json').then(function (res) {
        res.data.forEach(function (item) {
            item.starsAry = $rootScope.starsToImage(item.stars);
        });
        $scope.movies = res.data;
    });
}]);
app.controller('detailCtrl',['$scope','$state','$http',function ($scope,$state,$http) {
    var id = $state.params.id;
    $scope.movie = '';
    if(/C/.test(id)){
        $http.get('data/coming.json').then(function (res) {
            var data = res.data;
            for(var i = 0; i < data.length; i++){
                if(data[i].id == id){
                    $scope.movie = data[i];
                }
            }
        });
    }else if(/I/.test(id)){
        $http.get('data/theaters.json').then(function (res) {
            var data = res.data;
            for(var i = 0; i < data.length; i++){
                if(data[i].id == id){
                    $scope.movie = data[i];
                }
            }
        });
    }else if(/T/.test(id)){
        $http.get('data/TOP250.json').then(function (res) {
            var data = res.data;
            for(var i = 0; i < data.length; i++){
                if(data[i].id == id){
                    $scope.movie = data[i];
                }
            }
        });
    }
}]);
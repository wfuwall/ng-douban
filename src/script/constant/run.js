app.run(function ($rootScope,$location) {
    $rootScope.starsToImage = function (str) {
        str = str.toString();
        var newAry = [];
        var ary = str.split('');
        for (var i = 0; i < ary[0]; i++) {
            newAry.push(1);
        }
        if (ary[1] == 5) {
            newAry.push(2);
            for (var j = 0; j < 4 - ary[0]; j++) {
                newAry.push(0);
            }
        } else if (ary[1] == 0) {
            for (var k = 0; k < 5 - ary[0]; k++) {
                newAry.push(0);
            }
        }
        return newAry;
    };
    $rootScope.lists = [
        {
            name:'正在热映',
            url:'main',
            isActive:false
        },
        {
            name:'即将上映',
            url:'coming',
            isActive:false
        },
        {
            name:'TOP250',
            url:'top250',
            isActive:false
        }
    ];
    $rootScope.lists[0].isActive = true;
    $rootScope.click = function (index) {
        for(var i = 0; i< $rootScope.lists.length; i++){
            $rootScope.lists[i].isActive =false;
        }
        $rootScope.lists[index].isActive = true;
    };
    $rootScope.$on('success',function (e,data) {
        $rootScope.isLogin = true;
        $rootScope.loginName = data.name;
        $location.path(data.url);
    });
    $rootScope.exitEvent = function () {
        $rootScope.isLogin = false;
    }
});

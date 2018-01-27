angular.module("app").filter("sxuan", function () {
    return function (list,obj) {
        var result = [];
        angular.forEach(list, function (item) {
            var flag = true;
            for(var e in obj) {
                if(item[e] != obj[e]) {
                    flag = false;
                }
            }
            if (flag) {
                result.push(item);
            }

        });
        return result;
    }
});
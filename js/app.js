var app = angular.module("app" , []);
app.controller('emp',['$scope', 'calcFactory',  function($scope , calcFactory){
    $scope.a = 0;
    $scope.b = 0;
    $scope.doSum = function(){
        $scope.sum = parseInt(+$scope.a) + parseInt(+$scope.b);
    };
}]);

app.factory('calcFactory', [function(){
    console.log('instat');
    var oCalcService = {};
    oCalcService.getSum = function(a,b){
    };
    return oCalcService;
}]);

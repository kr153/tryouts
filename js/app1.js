   var app = angular.module("sample",[]).run(["$rootScope" , function($rootScope){
                $rootScope.percentage = 30;
           }]);
            
            // emp controller
           app.controller("emp",["$scope" , function(e){
                e.o = this;
                e.first = "John";
                e.second = "Doe";
                e.sal = 50000;
                e.annualSal = function(){
                    return this.sal * 12;
                };
                e.calcPercentage = function(){
                    return ((this.sal * 12 * this.percentage)/100) ;
                };
           }]);
           
           // employeeinfo controller
            app.controller("employeeinfo" , ["$scope" , function($scope){
                $scope.name = "Johnny";
                $scope.addr = "Kochi";
                $scope.myFunction = function(){
                    $scope.addr = "Cochin";
                };
            }]);
            
            // calc controller
            app.controller("calc" , ["$scope" ,'$http', 'calcFactory', function($scope,$http,calcFactory){
                $scope.sumCalc = function(){
                    $scope.sum = parseInt($scope.a) +   parseInt($scope.b)
                };

                $scope.sumCalcWeb = function(){
                    
                    $http({
                        url: 'http://127.0.0.1:8080/test.xbs?getSum()&a='+ $scope.a + '&b=' + $scope.b,
                        method: 'GET'
                    }).then(function(resp){
                        // success
                        $scope.sumWeb = resp.data.sum; 
                    } , function(resp){
                        // failure
                    }); 
                };
                $scope.a = 10;
                $scope.b = 20;
                $scope.doSum = function(){
                      $scope.sum = calcFactory.getSum($scope.a,$scope.b);
                }; 
            }]);
            
            app.factory('calcFactory' , ['$http','$log', function ($http,$log) {
                $log.log('instantiating calcFactory..')
                var ocalcService = {};
                ocalcService.getSum = function(a,b){
                   return  parseInt(a)+parseInt(b) ;
                } ;
                return ocalcService; 
                  
                
            }])


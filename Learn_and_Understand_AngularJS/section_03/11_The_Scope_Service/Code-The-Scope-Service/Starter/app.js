var myApp = angular.module('myApp', []);

myApp.controller('mainController', function($scope) {
    $scope.Name = 'Siddharth';
    $scope.Address = 'My address';
    $scope.getName = function(){
        console.log('Siddharth Mishra');
    }
    console.log($scope);
    $scope.getName();
});

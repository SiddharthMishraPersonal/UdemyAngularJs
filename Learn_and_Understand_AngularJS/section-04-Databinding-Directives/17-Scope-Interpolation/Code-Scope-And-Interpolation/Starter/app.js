var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$timeout', function($scope, $timeout) {
    $scope.name = 'Siddharth';
    $scope.address = '7067 S Santa Cruz Dr., Apt RS22, Cottonwood Heights, UT-84121';

    // Automatically the name would be changed and would be shown on page.
    $timeout(function(){
        $scope.name = 'Priyanka Pandey';
    }, 3000);
}]);

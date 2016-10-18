var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope','$filter', function($scope, $filter) {

    $scope.handle = 'Test';
    $scope.lowerCaseHandle = function(){
        return $filter('lowercase')($scope.handle);
    }
}]);

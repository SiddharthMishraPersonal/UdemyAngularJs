var myApp = angular.module('myApp', ['ngMessages']);

myApp.controller('mainController', function($scope, $log, $filter) {
    $scope.name = 'siddharth';
    $scope.formattedName = $filter('uppercase')($scope.name);

    $log.info($scope.name);
    $log.info($scope.formattedName);
});

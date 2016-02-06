var module = angular.module('lgmCoreModule');

module.controller('StashController', function ($scope, StashService) {
    $scope.items = [];
    StashService.all().then(function (items) {
        $scope.items = items;
    });
});
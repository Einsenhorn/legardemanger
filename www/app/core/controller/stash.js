var module = angular.module('lgmCoreModule');

module.controller('StashController', function ($scope, $state, StashService) {
    $scope.items = [];
    StashService.all().then(function (items) {
        $scope.items = items;
    });

    $scope.search = function() {
        $state.go('protected.tabs.recipes-search');
    };
});

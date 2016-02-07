var module = angular.module('lgmCoreModule');

module.controller('StashController', function ($scope, $state, StashService, IngredientCategoryService) {
    $scope.items = [];
    $scope.categories = IngredientCategoryService.all();

    StashService.all().then(function (items) {
        $scope.items = items;
    });
});

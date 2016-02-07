var module = angular.module('lgmCoreModule');

module.controller('ShoppingListController', function ($scope, ShoppingListService) {
    ShoppingListService.all().then(function(list) {
        $scope.list = list;
    });
});

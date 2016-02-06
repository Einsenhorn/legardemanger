var module = angular.module('lgmCoreModule');

module.controller('ShoppingListController', function ($scope) {
    $scope.list = [
        {
            name: 'My shopping list',
            author: {
                firstname: 'louis',
                lastname: 'de courcel',
                url: 'https://avatars2.githubusercontent.com/u/1643879?v=3&s=40'
            },
            createdAt: moment().add(-(Math.floor(Math.random() * 10 + 1)), 'days').fromNow(true),
            ingredients: [
                {
                    label: 'carrotte'
                },
                {
                    label: 'pomme de terre'
                }
            ]
        }
    ];
});

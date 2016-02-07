var module = angular.module('lgmCoreModule');

module.controller('RecipesSearchController', function($scope, $ionicPopup, $state, $timeout, ShoppingListService) {
    $scope.recipes = [
        {
            name: 'crepe aux nutella',
            preparationTime: '3h',
            peopleNumber: 1,
            difficulty: 1,
            needs: [
                {
                    label: 'nutella',
                    quantity: 500,
                    quantityUnity: 'gramme'
                }
            ]
        },
        {
            name: 'crepe aux sucre',
            preparationTime: '15h',
            peopleNumber: 1,
            difficulty: 2,
            needs: []
        },
        {
            name: 'crepe au sucre + citron',
            preparationTime: '15h',
            peopleNumber: 1,
            difficulty: 4,
            needs: [
                {
                    label: 'citron',
                    quantity: 2,
                    quantityUnity: 'unite'
                }
            ]
        },
    ];

    $scope.removeRecipe = function(recipe) {
        var pos = $scope.recipes.indexOf(recipe);

        if (pos !== -1) {
            $scope.recipes.splice(pos, 1);
        }
    };

    $scope.share = function() {
        var myPopup = $ionicPopup.show({
            template: 'la recette a ete partagee avec 3 participants',
            title: 'Recette partagee !'
          });

        $timeout(function() {
            myPopup.close(); //close the popup after 3 seconds for some reason
        }, 3000);
    };

    $scope.addShoppingList = function(recipe) {
        ShoppingListService
            .create('Liste de course pour ' + recipe.name, recipe.needs)
            .then(function() {
                $state.go('protected.tabs.shopping-list');
            });
    }
});

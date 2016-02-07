var module = angular.module('lgmCoreModule');

module.factory('IngredientCategoryService', [IngredientCategoryService]);

function IngredientCategoryService() {
    return {
        categories: {
            1: {
                id: 1,
                name: 'produit laitier',
                color: '#F0F'
            },
            2: {
                id: 2,
                name: '???',
                color: '#F00'
            }
        },
        all: function() {
            return this.categories;
        },
        get: function(id) {
            return this.categories[id] || null;
        }
    };
}

/**
 * Created by einsenhorn on 06/02/16.
 */

var module = angular.module('lgmCoreModule', []);

module.config(function ($stateProvider) {
    $stateProvider
        .state('login', {
            url: '/login',
            templateUrl: 'app/core/view/login.html',
            controller: 'LoginController'
        })
        .state('logout', {
            url: '/logout',
            template: ' '
        })
        .state('protected', {
            url: '/protected',
            abstract: true,
            templateUrl: 'app/core/view/protected.html'
        })
            .state('protected.tabs', {
                url: '/tabs',
                abstract: true,
                templateUrl: 'app/core/view/tabs.html'
            })
                .state('protected.tabs.stash', {
                    url: '/stash',
                    views: {
                        'protected-tabs-stash': {
                            templateUrl: 'app/core/view/stash/index.html',
                            controller: 'StashController'
                        }
                    }
                })
                .state('protected.stash-item-edit', {
                    url: '/stash-item-edit/{uuid:[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}}',
                    templateUrl: 'app/core/view/stash/item-edit.html',
                    controller: 'StashItemEditController'
                })
                .state('protected.tabs.recipes-tags', {
                    url: '/recipes/tags',
                    views: {
                        'protected-tabs-recipes-tags': {
                            templateUrl: 'app/core/view/recipes/tags.html',
                            controller: 'RecipesTagsController'
                        }
                    }
                })
                .state('protected.tabs.recipes-search', {
                    url: '/recipes/search',
                    templateUrl: 'app/core/view/recipes/search.html',
                    controller: 'RecipesSearchController'
                })
                .state('protected.tabs.shopping-list', {
                    url: '/shopping/list',
                    views: {
                        'protected-tabs-shopping-list': {
                            templateUrl: 'app/core/view/shopping/list.html',
                            controller: 'ShoppingListController'
                        }
                    }
                })
                .state('protected.tabs.profile', {
                    url: '/profile',
                    views: {
                        'protected-tabs-profile': {
                            templateUrl: 'app/core/view/profile.html',
                            controller: 'ProfileController'
                        }
                    }
                })
    ;
});

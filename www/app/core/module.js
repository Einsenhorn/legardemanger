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
                            templateUrl: 'app/core/view/stash.html',
                            controller: 'StashController'
                        }
                    }
                })
                .state('protected.tabs.b', {
                    url: '/b',
                    views: {
                        'protected-tabs-b': {
                            templateUrl: 'app/core/view/b.html',
                            controller: 'BController'
                        }
                    }
                })
            .state('protected.stash-item-edit', {
                url: '/stash-item-edit/{uuid:[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}}',
                templateUrl: 'app/core/view/stash-item-edit.html',
                controller: 'StashItemEditController'
            })
    ;
});
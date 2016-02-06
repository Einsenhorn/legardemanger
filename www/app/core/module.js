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
                .state('protected.tabs.a', {
                    url: '/a',
                    views: {
                        'protected-tabs-a': {
                            templateUrl: 'app/core/view/a.html',
                            controller: 'AController'
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
    ;
});
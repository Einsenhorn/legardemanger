moment().locale('fr');

var lgm = angular.module('legardemanger', [
    'ionic',

    'lgmCoreModule'
]);

lgm.config(function ($urlRouterProvider) {
    $urlRouterProvider.otherwise('/login');
});

lgm.run(function ($ionicPlatform, $rootScope) {
    $ionicPlatform.ready(function () {
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

            cordova.plugins.Keyboard.disableScroll(true);
        }

        if (window.StatusBar) {
            StatusBar.styleDefault();
        }
    });
});

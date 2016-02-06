var module = angular.module('lgmCoreModule');

module.controller('LoginController', function($scope, $state) {
    $scope.user = {
        username: 'foo',
        password: 'bar'
    };

    $scope.signIn = function() {
        $state.go('protected.tabs.stash');
    }
});
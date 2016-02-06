var module = angular.module('lgmCoreModule');

module.controller('StashController', function ($scope /*, StashService */) {
    moment().locale('fr');

    //StashService.all().then(function (items) {

        $scope.items = [
            {
                uuid: 'f674e06c-cc75-11e5-9956-625662870761',
                label: 'Fromage',
            },
            {
                uuid: 'f674e06c-cc75-11e5-9956-625662870761',
                label: 'Pomme',
            },
            {
                uuid: 'f674e06c-cc75-11e5-9956-625662870761',
                label: 'Poireau',
            },
            {
                uuid: 'f674e06c-cc75-11e5-9956-625662870761',
                label: 'Moutarde',
            },
            {
                uuid: 'f674e06c-cc75-11e5-9956-625662870761',
                label: 'Farine',
                quantity: '700',
                quantitySymbol: 'g',
            }
        ];

        var expirationDate = moment().add(7, 'days');

        $scope.items.push({
            uuid: 'f674e06c-cc75-11e5-9956-625662870761',
            label: 'Yahourt',
            quantity: '5',
            quantityUnity: 'unit',
            expirationDate: expirationDate.format('L'),
            expirationETA: expirationDate.fromNow(true)
        });

    // });
});
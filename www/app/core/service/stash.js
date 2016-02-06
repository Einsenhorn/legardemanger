var module = angular.module('lgmCoreModule');

module.factory('StashService', ['$q', 'ItemFactory', StashService]);
module.factory('ItemFactory', [ItemFactory]);

function ItemFactory() {
    return {
        create: function(label, quantity, quantityUnity) {
            var expirationDate = moment().add(((Math.random() * 31) + 1), 'days');

            return {
                uuid: uuid.v4(),
                label: label,
                quantity: quantity,
                quantityUnity: quantityUnity,
                expiration: {
                    date: expirationDate,
                    eta: expirationDate.fromNow(true)
                }
            };
        }
    }
}

function StashService($q, ItemFactory) {
    return {
        items: [
            ItemFactory.create('apple', Math.floor((Math.random() * 12) + 1), 'unit'),
            ItemFactory.create('sugar', Math.floor((Math.random() * 5) + 1) * 100, 'gram')
        ],
        all: function() {
            var deferred = $q.defer();

            deferred.resolve(this.items);

            return deferred.promise;
        },
        get: function(uuid) {
            var deferred = $q.defer(),
                i, l, item;

            for (i = 0, l = this.items.length ; i < l ; i++) {
                item = this.items[i];

                if (item.uuid === uuid) {
                    deferred.resolve(item);
                }
            }

            deferred.resolve(null);
        }
    };
}
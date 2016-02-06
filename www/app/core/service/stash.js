var module = angular.module('lgmCoreModule');

module.factory('StashService', ['ItemFactory', StashService]);
module.factory('ItemFactory', [ItemFactory]);

function ItemFactory() {
    return {
        create: function(label, quantity, quantityUnity) {
            var expirationDate = new Date(new Date().getTime() + (Math.floor((Math.random() * 31) + 1) * 24 * 3600) * 1000);

            return {
                uuid: uuid.v4(),
                label: label,
                quantity: quantity,
                quantityUnity: quantityUnity,
                expirationDate: expirationDate
            };
        }
    }
}

function StashService(ItemFactory) {
    return {
        items: [
            ItemFactory.create('apple', 42, 'unit'),
            ItemFactory.create('sugar', 21, 'gram')
        ],
        all: function() {
            return this.items;
        },
        get: function(uuid) {
            var i, l, item;

            for (i = 0, l = this.items.length ; i < l ; i++) {
                item = this.items[i];

                if (item.uuid === uuid) {
                    return item;
                }
            }

            return null;
        }
    };
}
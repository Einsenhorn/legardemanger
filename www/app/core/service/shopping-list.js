var module = angular.module('lgmCoreModule');

module.factory('ShoppingListService', ['$q', ShoppingListService]);

function ShoppingListService($q) {
    return {
        list: [
            {
                uuid: uuid.v4(),
                name: 'My shopping list',
                author: {
                    firstname: 'louis',
                    lastname: 'de courcel',
                    url: 'https://avatars2.githubusercontent.com/u/1643879?v=3&s=40'
                },
                createdAt: moment().add(-(Math.floor(Math.random() * 10 + 1)), 'days').fromNow(true),
                ingredients: [
                    {
                        label: 'carrotte(s)',
                        quantity: 3,
                        quantityUnity: ''
                    },
                    {
                        label: 'pomme de terre(s)',
                        quantity: 15,
                        quantityUnity: ''
                    }
                ]
            }
        ],
        create: function(name, ingredients) {
            var deferred = $q.defer(),
                list;

            list = {
                uuid: uuid.v4(),
                name: name,
                author: {
                    firstname: 'louis',
                    lastname: 'de courcel',
                    url: 'https://avatars2.githubusercontent.com/u/1643879?v=3&s=40'
                },
                createdAt: moment(),
                ingredients: ingredients
            };

            this.list.push(list);
            deferred.resolve(list);

            return deferred.promise;
        },
        all: function() {
            var deferred = $q.defer();

            deferred.resolve(this.list);

            return deferred.promise;
        },
        get: function(uuid) {
            var deferred = $q.defer(),
                i, l, item;

            for (i = 0, l = this.items.length ; i < l ; i++) {
                item = this.list[i];

                if (item.uuid === uuid) {
                    deferred.resolve(list);
                }
            }

            deferred.resolve(null);
        }
    };
}

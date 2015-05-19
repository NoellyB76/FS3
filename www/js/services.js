angular.module('starter.services', [])





.factory('FurnitureCollection', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var furnitureCollection = [{
    id: 0,
    name: 'Coco Isle Cushion Dining',
    image1: 'coco_isle_cushion_dining.png',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
  }, {
    id: 1,
    name: 'English Garden Cushion Dining',
    image1: 'english_garden_cushion_dining.png',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
  },{
    id: 2,
    name: 'Jakarta Deep Seating',
    image1: 'jakarta_deep_seating.png',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
  }];

  return {
    all: function() {
      return furnitureCollection;
    },
    remove: function(item) {
      furnitureCollection.splice(furnitureCollection.indexOf(item), 1);
    },
    get: function(furnitureId) {
      for (var i = 0; i < furnitureCollection.length; i++) {
        if (furnitureCollection[i].id === parseInt(furnitureId)) {
          return furnitureCollection[i];
        }
      }
      return null;
    }
  };
});

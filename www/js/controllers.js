angular.module('starter.controllers', [])

.controller('COldDashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})
.controller('DashCtrl', function($scope, FurnitureCollection) {
  $scope.furnColl = FurnitureCollection.all();
  $scope.remove = function(item) {
    FurnitureCollection.remove(item);
  }
  })
.controller('DashDetailCtrl', function($scope, $stateParams,FurnitureCollection) {
    $scope.furnItem = FurnitureCollection.get($stateParams.furnitureId);
  })

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});

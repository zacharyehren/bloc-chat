(function() {
  function openRoomContainer() {
    
    
    return {
      templateUrl: '/templates/directives/roomContainer.html',
      controller: '/scripts/controller/roomContainerCtrl.js',
      controllerAs: 'roomContainerCtrl',
      replace: true,
      restrict: 'E',
      scope: { },
      link: function(scope, element, attributes){
        scope.changeRoom = function(room) {
          scope.currentRoom = room;
        };
        
      }
    };
  }
  
  angular
    .module('blocChat')
    .directive('openRoomContainer', [openRoomContainer]);
})();
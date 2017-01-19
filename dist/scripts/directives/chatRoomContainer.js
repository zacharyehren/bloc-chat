(function() {
  function chatRoomContainer() {
    return{
      restrict: 'E',
      controller: 'ChatRoomCtrl',
      scope: {
        selectedRoom: '=' //binds the local scope property and the expression passed to via the attribute 
    }, 
      template: 'app/templates/directives/chatRoom.html'
    };
  }
  
  angular
    .module('blocChat')
    .directive('chatRoomContainer', [chatRoomContainer]);
})();
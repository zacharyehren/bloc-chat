angular.module('blocChat')
  .directive('chatRoom', function() {
    return {
      controller: 'ChatRoomCtrl',
      restrict: 'E',
      scope: {
        selectedRoom: '='
        //What does selectedRoom do? A: passes selected-room from home.html to chatRoom.html
      },
      templateUrl: '/templates/directives/chatRoom.html'
    };
  })

angular.module('blocChat')
  .directive('chatRoom', function() {
    return {
      controller: 'ChatRoomCtrl',
      restrict: 'E',
      scope: {
        selectedRoom: '='
        //What does selectedRoom do?
      },
      templateUrl: '/templates/directives/chatRoom.html'
    };
  })

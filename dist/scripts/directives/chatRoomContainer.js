angular.module('blocChat')
  .directive('chatRoom', function() {
    return {
      controller: 'ChatRoomCtrl',
      restrict: 'E',
      scope: {
        selectedRoom: '='
      },
      templateUrl: '/templates/directives/chatRoom.html'
    };
  })

angular.module('blocChat')
  .directive('chatRoom', function() {
    return {
      restrict: 'E',
      scope: {
        selectedRoom: '=',
        messages: '='
      },
      templateUrl: '/templates/directives/chatRoom.html'
    };
  })

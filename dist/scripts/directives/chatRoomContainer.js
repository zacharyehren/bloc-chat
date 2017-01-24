angular.module('blocChat')
  .directive('chatRoom', function() {
    return {
      restrict: 'E',
      scope: {
        selectedRoom: '='
      },
      templateUrl: '/templates/directives/chatRoom.html'
    };
  })

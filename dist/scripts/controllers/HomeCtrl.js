(function() {
  function HomeCtrl(Room, Message) {
    this.roomsList = Room.all;

    this.changeRoom = function(room) {
      this.currentRoom = room;
    }
  }
  
  angular
    .module('blocChat')
    .controller('HomeCtrl', ['Room', 'Message', HomeCtrl]);
})();

(function() {
  function RoomsCtrl(Room) {
    this.roomsList = Room.all;

    this.changeRoom = function(room) {
      this.currentRoom = room;
    };
  }

  angular
    .module('blocChat')
    .controller('RoomsCtrl', ['Room', RoomsCtrl]);

})();

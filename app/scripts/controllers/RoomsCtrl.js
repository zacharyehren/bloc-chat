(function() {
  function RoomsCtrl(Room) {
    this.roomsList = Room.all;
  }

  angular
    .module('blocChat')
    .controller('RoomsCtrl', ['Room', RoomsCtrl]);

})();

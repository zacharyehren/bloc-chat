(function() {
  function HomeCtrl(Room, Message) {
    this.roomsList = Room.all;

    this.changeRoom = function(room) {
      this.currentRoom = room;
      console.log(this.currentRoom.$id);
      this.messages = Message.getRoomById(this.currentRoom.$id);
      console.log(this.messages);
    }
  }

  angular
    .module('blocChat')
    .controller('HomeCtrl', ['Room', 'Message', HomeCtrl]);
})();

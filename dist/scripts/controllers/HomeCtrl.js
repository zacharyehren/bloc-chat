(function() {
  function HomeCtrl(Room, Message) {
    this.roomsList = Room.all;

    this.changeRoom = function(room) {
      this.currentRoom = room;
      this.messages = Message.getRoomById(this.currentRoom.$id);
    }

    this.submit = function() {
     if(this.newInput.length <= 0){
       return;
     } else{ Message.send(this.newInput, this.currentRoom.$id);
      this.newInput = "";
      }
    };

  }

  angular
    .module('blocChat')
    .controller('HomeCtrl', ['Room', 'Message', HomeCtrl]);
})();

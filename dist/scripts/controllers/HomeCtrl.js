(function() {
  function HomeCtrl(Room, Message, UserOnline) {
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
    
    this.listOnlineUser = UserOnline.online;
    console.log(UserOnline.online);

  }

  angular
    .module('blocChat')
    .controller('HomeCtrl', ['Room', 'Message', 'UserOnline', HomeCtrl]);
})();

(function() {
  function Message($firebaseArray) {
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);
    //Assigns the messages variable to the messages database in firebase
    
    var sendNewMessage = function() {
      console.log("test");
    };

    return {

      getRoomById: function(roomId){
        console.log(messages);
        return $firebaseArray(ref.orderByChild("roomId").equalTo(roomId));
      },
//      send: function(newMessage) {
//        messages.$add(newMessage);
//      },
      send: sendNewMessage
    };


  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();

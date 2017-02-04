(function() {
  function Message($firebaseArray) {
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);
    //Assigns the messages variable to the messages database in firebase
    
    var addMessage = function(){
    };

    return {

      getRoomById: function(roomId){
        console.log(messages);
        return $firebaseArray(ref.orderByChild("roomId").equalTo(roomId));
      },
      send: function(newMessage) {
       messages.$add(newMessage);
      console.log('123');
      }
    };


  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();

(function() {
  function Message($firebaseArray, $cookies) {
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);
    //Assigns the messages variable to the messages database in firebase


    return {

      getRoomById: function(roomId){
        console.log(messages);
        return $firebaseArray(ref.orderByChild("roomId").equalTo(roomId));
      },
      send: function(newMessage) {
       messages.push({
        username: $cookies.$value,
        content: newMessage
       });
      }
    };


  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', '$cookies', Message]);
})();

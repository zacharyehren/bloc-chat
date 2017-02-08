(function() {
  function Message($firebaseArray, $cookies, Room, $filter) {
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);
    //Assigns the messages variable to the messages database in firebase

    var date = new Date();

    return {

      getRoomById: function(roomId){
        return $firebaseArray(ref.orderByChild("roomId").equalTo(roomId));
      },
      send: function(newMessage, roomId){
      var message = {
        content: newMessage,
        username: $cookies.get('blocChatCurrentUser'),
        roomId: roomId,
        sentAt: $filter('date')(date, 'shortTime')
      };
      messages.$add(message);
      }
     }

    };


  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', '$cookies', 'Room', '$filter', Message]);
})();

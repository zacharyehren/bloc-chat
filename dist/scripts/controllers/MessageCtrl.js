(function() {
  function MessageCtrl(Message) {
    this.newInput = Message.addMessage;
    this.submit = function(newMessage) {
      Message.send(newMessage);
      console.log('got to controller');
    };
  }
    
  angular 
    .module('blocChat')
    .controller('MessageCtrl', ['Message', MessageCtrl]);
  })();
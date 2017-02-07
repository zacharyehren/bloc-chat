(function() {
  function MessageCtrl(Message) {
    this.newInput = Message.newMessage;
    this.submit = function() {
      Message.send(this.newInput);
      console.log(this.newInput);
      this.newInput = default;
    };
  }
    
  angular 
    .module('blocChat')
    .controller('MessageCtrl', ['Message', MessageCtrl]);
  })();
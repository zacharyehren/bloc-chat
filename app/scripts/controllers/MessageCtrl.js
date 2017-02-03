(function() {
  function MessageCtrl(Message) {
    this.newMessage = Message.send;
    this.newInput;
    this.submit = function(){
      console.log(this.newInput);
    };
  }
    
  angular 
    .module('blocChat')
    .controller('MessageCtrl', ['Message', MessageCtrl]);
  })();
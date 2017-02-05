(function() {
  function MessageCtrl(Message) {
    this.newInput;
    this.submit = function() {
      Message.send(this.newInput);
      console.log(this.newInput);
    };
  }
    
  angular 
    .module('blocChat')
    .controller('MessageCtrl', ['Message', MessageCtrl]);
  })();
(function() {
  function ModalCtrl($uibModal, $log, $document, Room) {
    this.createNewRoom = Room.newRoom;
    this.cancelModal = function {
      
    }
    
    
  }
  
  angular
    .module('blocChat')
    .controller('ModalCtrl', [ModalCtrl]);
})();
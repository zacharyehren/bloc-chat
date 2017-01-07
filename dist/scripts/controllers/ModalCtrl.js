(function() {
  function ModalCtrl($uibModal, $log, $document, Room) {
    this.newRoom = Room.createNewRoom();
    
    this.cancelModal = function() {
      $uibModal.close();
    };
    
    this.openModal = function() {
      $uibModal.open();
    }
  }
  
  angular
    .module('blocChat')
    .controller('ModalCtrl', ['Room', ModalCtrl]);
})();
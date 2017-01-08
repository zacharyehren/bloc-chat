(function() {
  //Do I need to include $log and $document as dependents?
  function ModalCtrl($uibModal, $log, $document, Room) {
    this.newRoom = Room.create;
    
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
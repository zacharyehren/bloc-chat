(function() {
  function config($stateProvider, $locationProvider) {

    $locationProvider
      .html5Mode({
      enabled: true,
      requireBase: false
    });

    $stateProvider
      .state('home', {
      url: '/',
      controller: 'RoomsCtrl as rooms',
      templateUrl: '/templates/home.html'
    })
    
    //Do I need to inject the modal as a state? 
      .state('modal'), {
      url: '/',
      controller: 'ModalCtrl as modalRoom',
      templateUrl: '/templates/modal.html'
    });

  }
  angular
  .module('blocChat', ['ui.router', 'firebase', 'ui.bootstrap'])
  .config(config);
})();

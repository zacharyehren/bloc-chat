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
      
      .state('roomContainer', {
      url: '/',
      controller: 'RoomContainerCrl as roomContainer',
      templateUrl: '/templates/roomContainer.html'
    });
    
 

  }
  angular
  .module('blocChat', ['ui.router', 'firebase', 'ui.bootstrap'])
  .config(config);
})();

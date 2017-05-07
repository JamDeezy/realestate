export default [
  "$urlRouterProvider",
  "$locationProvider",
  "$stateProvider",
  function($urlRouterProvider, $locationProvider, $stateProvider) {
    $urlRouterProvider.when("/", "/home");
    $locationProvider.html5Mode(true);

    $stateProvider.state("home", {
      url: "/home",
      views: {
        root: {
          template: require("./features/home/home.html"),
          controller: "HomeController",
          controllerAs: "home"
        }
      }
    });
    $stateProvider.state("listings", {
      url: "/listings",
      views: {
        root: {
          template: "listings here",
          controller: "HomeController",
          controllerAs: "home"
        }
      }
    });
  }
];

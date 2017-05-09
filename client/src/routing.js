export default [
  "$urlRouterProvider",
  "$locationProvider",
  "$stateProvider",
  function($urlRouterProvider, $locationProvider, $stateProvider) {
    $urlRouterProvider.when("/", "/home");
    $locationProvider.html5Mode(true);

    $stateProvider.state("home", {
      url: "/home",
      template: require("./features/home/home.html"),
      controller: "HomeController"
    });

    $stateProvider.state("listings", {
      url: "/listings",
      template: require("./features/listings/listings.html"),
      controller: "ListingsController"
    });

    $stateProvider.state("showListing", {
      url: "/listings/:id",
      template: "<h1>{{id}}</h1>",
      controller: function($scope, $stateParams) {
        $scope.id = $stateParams.id;
      }
    });
  }
];

import * as _ from "lodash";

function listingCtrl($scope, $http, $timeout) {
  // Leased image
  $scope.leased = require("../../../assets/leased.png");

  // Center on Toronto
  $scope.map = {
    center: { latitude: 43.6532, longitude: -79.3832 },
    zoom: 12
  };

  // Filters
  $scope.filters = {
    available: false,
    price: {
      min: 100,
      max: 180,
      options: {
        floor: 0,
        ceil: 450
      }
    }
  };

  $scope.init = () => {
    $http.get("/api/listings").then(response => {
      $scope.listings = response.data;

      $scope.filters.price.min = _.min(_.map($scope.listings, "price"));
      $scope.filters.price.max = _.max(_.map($scope.listings, "price"));
      $scope.filters.price.options.floor = $scope.filters.price.min;
      $scope.filters.price.options.ceil = $scope.filters.price.max;
    });
  };

  $scope.init();

  // bad code
  $timeout(function() {
    $scope.$broadcast("rzSliderForceRender");
  }, 10);

  $scope.$watch(
    "filters",
    () => {
      if ($scope.listings && $scope.listings.length > 0) {
        $scope.displayedListings = $scope.listings.filter(listing => {
          return (
            listing.price >= $scope.filters.price.min &&
            listing.price <= $scope.filters.price.max &&
            (!$scope.filters.available || listing.available)
          );
        });
      }
    },
    true
  );
}

export default ["$scope", "$http", "$timeout", listingCtrl];

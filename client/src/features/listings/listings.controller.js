function listingCtrl($scope, $http) {
  // Leased image
  $scope.leased = require("../../../assets/leased.png");

  // Center on Toronto
  $scope.map = {
    center: { latitude: 43.6532, longitude: -79.3832 },
    zoom: 12
  };

  $scope.init = () => {
    $http.get("/api/listings").then(response => {
      $scope.listings = response.data;
    });
  };

  $scope.init();
}

export default ["$scope", "$http", listingCtrl];

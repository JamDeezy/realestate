function listingCtrl($scope) {
  $scope.imagePath =
    "//www.dashpropertymanagement.com/cmsb/uploads/lobby_014.jpg";

  // Center on Toronto
  $scope.map = {
    center: { latitude: 43.6532, longitude: -79.3832 },
    zoom: 12
  };

  $scope.listings = [
    {
      id: 1,
      headerImage: $scope.imagePath,
      headerTitle: "x bedroom something something else",
      show: "/listings/1"
    },
    {
      id: 2,
      headerImage: $scope.imagePath,
      headerTitle: "x bedroom something something else",
      show: "/listings/2"
    },
    {
      id: 3,
      headerImage: $scope.imagePath,
      headerTitle: "x bedroom something something else",
      show: "/listings/3"
    },
    {
      id: 4,
      headerImage: $scope.imagePath,
      headerTitle: "x bedroom something something else",
      show: "/listings/4"
    },
    {
      id: 5,
      headerImage: $scope.imagePath,
      headerTitle: "x bedroom something something else",
      show: "/listings/5"
    },
    {
      id: 6,
      headerImage: $scope.imagePath,
      headerTitle: "x bedroom something something else",
      show: "/listings/6"
    },
    {
      id: 7,
      headerImage: $scope.imagePath,
      headerTitle: "x bedroom something something else",
      show: "/listings/7"
    }
  ];
}

export default ["$scope", listingCtrl];

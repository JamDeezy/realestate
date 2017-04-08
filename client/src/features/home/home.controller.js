export default [
  "$scope",
  $scope => {
    $scope.carouselCards = [
      {
        id: 0,
        header: "header",
        subheader: "subheader",
        route: "/home",
        img: "//scontent.fymy1-1.fna.fbcdn.net/v/t1.0-9/4493_104380056411_895693_n.jpg?oh=7635a3c790173dea713d3d5b872bdb9c&oe=595B9BC2"
      },
      {
        id: 1,
        header: "header",
        subheader: "subheader",
        route: "/home",
        img: "//scontent.fymy1-1.fna.fbcdn.net/v/t1.0-9/4493_104380021411_108509_n.jpg?oh=c01922cc2126c2f8fe557c766163f0fd&oe=595C67E9"
      },
      {
        id: 2,
        header: "header",
        subheader: "subheader",
        route: "/home",
        img: "//scontent.fymy1-1.fna.fbcdn.net/v/t1.0-9/4493_104380011411_1933935_n.jpg?oh=f93702089d14f81bca21d903ee74e81d&oe=595A132B"
      },
      {
        id: 3,
        header: "header",
        subheader: "subheader",
        route: "/home",
        img: "//scontent.fymy1-1.fna.fbcdn.net/v/t1.0-9/4493_104380006411_7937717_n.jpg?oh=62cb64a9ac3769d787b3fe06e7f4b1de&oe=59502576"
      },
      {
        id: 4,
        header: "header",
        subheader: "subheader",
        route: "/home",
        img: "//scontent.fymy1-1.fna.fbcdn.net/v/t1.0-9/4493_104379996411_229165_n.jpg?oh=04b4977f15c38232baccc88b9f64c525&oe=5955133B"
      }
    ];

    $scope.infoBoxes = [
      {
        icon: "fa-flash",
        header: "Info",
        subheader: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sodales id elit ut gravida. Donec nunc nunc, mattis ac dictum tempus, cursus ac sem.",
        route: "/home"
      },
      {
        icon: "fa-flash",
        header: "Info",
        subheader: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sodales id elit ut gravida. Donec nunc nunc, mattis ac dictum tempus, cursus ac sem.",
        route: "/home"
      },
      {
        icon: "fa-flash",
        header: "Info",
        subheader: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sodales id elit ut gravida. Donec nunc nunc, mattis ac dictum tempus, cursus ac sem.",
        route: "/home"
      },
      {
        icon: "fa-flash",
        header: "Info",
        subheader: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sodales id elit ut gravida. Donec nunc nunc, mattis ac dictum tempus, cursus ac sem.",
        route: "/home"
      }
    ];

    $scope.featuredListings = [
      {
        id: 0,
        img: "//www.sundaypost.com/wp-content/uploads/sites/13/2016/02/Hugh-Laurie.jpg"
      },
      {
        id: 1,
        img: "//www.sundaypost.com/wp-content/uploads/sites/13/2016/02/Hugh-Laurie.jpg"
      },
      {
        id: 2,
        img: "//www.sundaypost.com/wp-content/uploads/sites/13/2016/02/Hugh-Laurie.jpg"
      },
      {
        id: 3,
        img: "//www.sundaypost.com/wp-content/uploads/sites/13/2016/02/Hugh-Laurie.jpg"
      },
      {
        id: 4,
        img: "//www.sundaypost.com/wp-content/uploads/sites/13/2016/02/Hugh-Laurie.jpg"
      },
      {
        id: 5,
        img: "//www.sundaypost.com/wp-content/uploads/sites/13/2016/02/Hugh-Laurie.jpg"
      },
      {
        id: 6,
        img: "//www.sundaypost.com/wp-content/uploads/sites/13/2016/02/Hugh-Laurie.jpg"
      },
      {
        id: 7,
        img: "//www.sundaypost.com/wp-content/uploads/sites/13/2016/02/Hugh-Laurie.jpg"
      }
    ];

    $scope.$watch("featuredListings", () => {
      $scope.featuredListingsOne = $scope.featuredListings.slice(0, 4);
      $scope.featuredListingsTwo = $scope.featuredListings.slice(4, 8);
    });

    $scope.goto = page => {
      console.log(page);
    };
  }
];

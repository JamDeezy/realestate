import "angular-material/angular-material.css";
import "./index.scss";

// module imports
import angular from "angular";
import router from "angular-ui-router";
import material from "angular-material";
import bootstrap from "angular-ui-bootstrap";
import animate from "angular-animate";
import home from "./features/home";
// non-named module imports

// configs
import routing from "./routing";

// Main angular app
var app = angular
  .module("app", [home, router, material, bootstrap, animate])
  .config(routing)
  .run(function($rootScope, $state, $stateParams) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
  });

export default app.name;

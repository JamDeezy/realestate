import "angular-material/angular-material.css";
import "./index.scss";

// module imports
import * as _ from "lodash";
import angular from "angular";
import router from "angular-ui-router";
import material from "angular-material";
import bootstrap from "angular-ui-bootstrap";
import animate from "angular-animate";
import simpleLogger from "angular-simple-logger";
import googleMaps from "angular-google-maps";

import home from "./features/home";
import listings from "./features/listings";

// configs
import routing from "./routing";
import map from "./map";
import run from "./run";

// Main angular app
var app = angular
  .module("app", [
    home,
    listings,
    router,
    material,
    bootstrap,
    animate,
    "uiGmapgoogle-maps"
  ])
  .config(routing)
  .config(map)
  .run(run);

export default app.name;

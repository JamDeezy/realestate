import "./listings.scss";
import "angularjs-slider/dist/rzslider.css";

import angular from "angular";
import angularSlider from "angularjs-slider";
import listingsController from "./listings.controller";

export default angular
  .module("app.listings", ["rzModule"])
  .controller("ListingsController", listingsController).name;

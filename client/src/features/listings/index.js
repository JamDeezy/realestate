import "./listings.scss";

import angular from "angular";
import listingsController from "./listings.controller";

export default angular
  .module("app.listings", [])
  .controller("ListingsController", listingsController).name;

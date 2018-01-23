
const app = angular.module("Pretty", ["ngRoute"]);

app.config(["$routeProvider", function($routeProvider) {

  $routeProvider
  .when("/", {
    templateUrl: "angularpartials/home.html",
    controller: "homecon"
  }).when("/flexbox", {
      templateUrl: "angularpartials/flexbox.html",
      controller: "flexcon"
  }).when("/button", {
      templateUrl: "angularpartials/button.html",
      controller: "buttoncon"
  // }).when("/", {
  //     templateUrl: "",
  //     controller: ""
  // }).when("/", {
  //     templateUrl: "",
  //     controller: ""
  // }).when("/", {
  //     templateUrl: "",
  //     controller: ""
  // }).when("/", {
  //     templateUrl: "",
  //     controller: ""
  // }).when("/", {
  //     templateUrl: "",
  //     controller: ""
  }).otherwise({
    redirectTo:"/"
  })
}])

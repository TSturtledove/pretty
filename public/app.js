
const app = agular.module("Pretty", ["ngRoute"]);

app.config(["$routeProvider", function($routeProvider) {

  $routeProvider
  .when("/", {
    templateUrl: "angularpartials/home.html",
    controller: "homecon"
  }).when("/flexbox", {
      templateUrl: "angularpartials/flexbox.html",
      controller: "flexcon"
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
  // }).when("/", {
  //     templateUrl: "",
  //     controller: ""
  }).otherwise({
    redirectTo:"/"
  })
}])


const app = agular.module("Pretty", ["ngRoute"]);

app.config(["$routeProvider", function($routeProvider) {

  $routeProvider
  .when("/", {
    templateUrl: "",
    controller: ""
  }).when("/", {
      templateUrl: "",
      controller: ""
  }).when("/", {
      templateUrl: "",
      controller: ""
  }).when("/", {
      templateUrl: "",
      controller: ""
  }).when("/", {
      templateUrl: "",
      controller: ""
  }).when("/", {
      templateUrl: "",
      controller: ""
  }).when("/", {
      templateUrl: "",
      controller: ""
  }).when("/", {
      templateUrl: "",
      controller: ""
  }).otherwise({
    redirectTo:"/"
  })
}])

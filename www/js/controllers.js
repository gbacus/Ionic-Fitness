angular.module('starter.controllers', [])

.controller('HomeCtrl', function($scope, $http) {
  var apiUrl = "http://quotes.rest/qod.json?category=inspire";

  $scope.getQuote = function () {
    $http.get(apiUrl)
    .then(function(response) {
      var data = response.data.contents.quotes;
      data.forEach(function(item) {
        $scope.quote = item
      });
    })
    .catch(function(error) {
      console.log ('Error getting from Quote API', error);
    });
  }  
})

.controller('RecordCtrl', function($scope) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  // $scope.$on('$ionicView.enter', function(e) {
  // });
  $scope.consolestuff = function() {
    console.log('hellloooo');
  }
  // $scope.display = {
  //   name: 'tai'
  // };
  // $scope.remove = function(chat) {
  //   Record.remove(chat);
  // };
})

// .controller('RecordCtrl', function($scope, $stateParams, Record) {
//   $scope.record = Record.get($stateParams.recordId);
// })

.controller('HistoryCtrl', function($scope, WorkoutsFac, ExerciseList, $window) {
  $scope.settings = {
    enableFriends: true
  };

  $scope.exerciseList = ExerciseList;
  $scope.selectedExercise = {};
  $scope.newExercise = {};
  $scope.exercises = [];

  $scope.add = function() {
    console.log('adding new exercise to the workout plan');
    console.log('this is the new exercise:', $scope.newExercise);
    $scope.exercises.push($scope.newExercise);
    console.log('exercises in workout plan:', $scope.exercises);
    $scope.newExercise = {};
  };

  $scope.logWorkout = function() { // takes the exercises collection and sends it to a POST req, headed towards /workoutHistory
    console.log('about to send exercise data from workout to the server');
    console.log('this is the exercise data:', $scope.exercises);
    var user = $window.localStorage.getItem('user');
    console.log('user found before sending data to server:', user);
    var data = {exercises: $scope.exercises};
    WorkoutsFac.storeWorkout(data);
  };
});

angular.module('starter.services', [])

.factory('WorkoutsFac', function ($http, $window) { // throw into workout planner controller

  var storeWorkout = function(exercisesData) {
    return $http({
      method: 'POST',
      url: '/workoutHistory',
      data: exercisesData
    })
    .then(function(res) {
      console.log('Successfully posted the data server side where it can be stored in the user\'s db:', res.data);
    }, function(err) {
      console.error(err);
    })
  };

  var getWorkoutHistory = function() {
    return $http({
      method: 'GET', // changed from GET becaus
      url: '/workoutHistory' // /${user}`
    })
    .then(function(res) {
      console.log('Successfully retrieved user\'s workout history from the db:', res.data);
    }, function(err) {
      console.error(err);
    })
  };

  return {
    storeWorkout: storeWorkout,
    getWorkoutHistory: getWorkoutHistory
  };
})

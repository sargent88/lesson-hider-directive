angular.module('directivePractice').service('lessonSrv', function($http) {
    this.getSchedule = function() {
        return $http.get('schedule.json')
    }


})
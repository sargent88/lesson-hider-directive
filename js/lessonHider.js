angular.module('directivePractice').directive('lessonHider', function() {
    return {
        restrict: 'E',
        templateUrl: 'lessonHider.html',
        scope: {
            lesson: '=',
            dayAlert: '&'
        },
        controller: function($scope, lessonSrv) {
            $scope.getSchedule = lessonSrv.getSchedule();
            // console.log($scope.getSchedule)
        },
        link: function(scope, element, attributes) {
            scope.getSchedule.then(function(response) {
                scope.schedule = response.data;
                // console.log(scope.schedule)

                var schedule = scope.schedule

                for (var i = 0; i < schedule.length; i++) {
                    // console.log(schedule[i])
                    if (schedule[i].lesson === scope.lesson && schedule[i].dayAlert === scope.lessonDay) {
                        // console.log(schedule[i].lesson)
                        // console.log(scope.lesson)
                        return element.css('text-decoration', 'line-through');
                    }
                }
            });
        }
    }
});
var appX = angular.module('mainApp', []);

appX.controller('app', function($scope) {
	$scope.tasks = [];

	// store data in localStorage... 
	// localStorage.clear() - run in console...
	var taskData = localStorage['tasksList'];
	if (taskData !== undefined) {
		$scope.tasks = JSON.parse(taskData)
	}

	// if you press enter & input box isnt empty then add task to list 
	$scope.searchEnter = function() {
		if (event.which == 13 && $scope.task != "") {
			$scope.addTask();
		}
	};
	// add a task then set $scope.task back to empty string 
	// add to localStorage?? 
	$scope.addTask = function() {
		$scope.tasks.push({'taskMessage':$scope.task, 'status': false})
		$scope.task = "";
		localStorage['tasksList'] = JSON.stringify($scope.tasks);
		//console.log(localStorage)
	};

	// text is already changed when contentEdit is called & msg contains previous values... 
	$scope.contentEdit = function(msg) {
		for (i=0; i <$scope.tasks.length;i++) {
			console.log($scope.tasks.length[i])
			if ($scope.tasks[i].taskMessage == msg) {
				$scope.tasks[i].taskMessage = event.target.innerText
			}
		}
		localStorage['tasksList'] = JSON.stringify($scope.tasks);
		console.log($scope.tasks)
		event.target.contentEditable = event.target.contentEditable == "false" ? "true" : "false";
	};

	$scope.enterAgain = function(msg) {
		if (event.which == 13 && msg.task != "") {
			$scope.contentEdit();
		}
	};

})
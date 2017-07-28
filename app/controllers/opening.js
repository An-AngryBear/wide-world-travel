'use strict';

myApp.controller('opening', function($scope, $window) {


	$scope.goToBooks = () => {
		$window.location.href = "#!/guide-list.html";
	};

});
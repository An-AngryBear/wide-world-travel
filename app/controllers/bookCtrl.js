
myApp.controller('bookCtrl', function($scope, BookFactory) {
	BookFactory.getBooks()
	.then( (booksData) => {
		$scope.books = booksData.data.guides;
	});
});
'use strict';

myApp.controller('bookCtrl', function($scope, BookFactory) {
	BookFactory.getBooks()
	.then( (booksData) => {
		console.log(booksData);
		$scope.books = booksData.data.guides;
	});
});
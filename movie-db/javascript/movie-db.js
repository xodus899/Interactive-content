let movies = [
	{
		title: "In Bruges",
		rating: 3.5 + " Stars",
		hasWatched: false
	},
	{
		title: "Frozen",
		rating: 4.5 + " Stars",
		hasWatched: false
	},
	{
		title: "Batman",
		rating:  3.7 + " Stars",
		hasWatched: true
	},
	{
		title: "Superman",
		rating: 3.5 + " Stars",
		hasWatched: true
	}
];

function moviesWatched(boolean) {
	let result;
	let rating;
	movies.forEach( (movie) => {
		if (movie.hasWatched === boolean && movie.hasWatched === true ) {
			result = "You have watched: " + movie.title;
			rating = rating = " with a rating of: " + movie.rating;
			console.log(result + rating);
		} else if (movie.hasWatched === boolean && movie.hasWatched === false ) {
			result = "You have not watched: " + movie.title;
			rating = rating = " with a rating of: " + movie.rating;
			console.log(result + rating);
		}
	})
}
moviesWatched(true);

console.log("***************************************************");

function moviesWatchedNoParams() {
	let result;
	let rating;
	movies.forEach( (movie) => {
		if (movie.hasWatched === true ) {
			result = "You have watched: " + movie.title;
			rating = rating = " with a rating of: " + movie.rating;
			console.log(result + rating);
		} else if (movie.hasWatched === false ) {
			result = "You have not watched: " + movie.title;
			rating = rating = " with a rating of: " + movie.rating;
			console.log(result + rating);
		}
	})
}

moviesWatchedNoParams();










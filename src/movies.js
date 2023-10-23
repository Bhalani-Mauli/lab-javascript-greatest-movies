// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  const result = moviesArray.map((movieArray) => {
    return movieArray.director;
  });
  return result;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  const result = moviesArray.filter((movie) => {
    return (
      movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
    );
  });
  return result.length;
}

// movieArray= [ { score :10 } ]
// acc - 0
// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length == 0) return 0;

  const total = moviesArray.reduce((acc, el) => acc + (el.score || 0), 0);
  const average = total / moviesArray.length;
  return Number(average.toFixed(2));
}

// {
//     title: 'Goodfellas',
//     year: 1990,
//     director: 'Martin Scorsese',
//     duration: '2h 26min',
//     genre: ['Crime', 'Drama'],
//     score: 8.7
//   },
// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  let dramaCount = 0;

  const totalRating = moviesArray.reduce((acc, curr) => {
    if (curr.genre.includes("Drama")) {
      dramaCount += 1;
      return acc + curr.score;
    } else {
      return acc;
    }
  }, 0);

  if (dramaCount == 0) return 0;
  return Number((totalRating / dramaCount).toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const temp = [...moviesArray];
  const sortByYear = temp.sort((a, b) => {
    if (a.year == b.year) {
      return a.title.localeCompare(b.title);
    }
    return a.year - b.year;
  });
  return sortByYear;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const temp = [...moviesArray];
  const sortAlphabetically = temp.sort((a, b) => {
    return a.title.localeCompare(b.title);
  });
  return sortAlphabetically.slice(0, 20).map((movie) => {
    return movie.title;
  });
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}

const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.listOfTitles = function () {
  const transforedArray = this.films.map((film) => {
    return film.title;
  });

return transforedArray;
};

Cinema.prototype.findByTitle = function (title) {
  const result = this.films.find((film) => {
     return film.title === title;
  })
 return result;
};

Cinema.prototype.filterFilmByGenre = function (genre) {
  const result = this.films.filter((film) => {
    return film.genre === genre;
  })
return result;
};

Cinema.prototype.findFilmByYear = function (year) {
  const result = this.films.filter((film) => {
    return film.year === year;
  })
  return result;
};

Cinema.prototype.findFilmsOverLength = function (length) {
  const result = this.films.filter((film) => {
    return film.length >= length;
  })
  return result;
};



module.exports = Cinema;

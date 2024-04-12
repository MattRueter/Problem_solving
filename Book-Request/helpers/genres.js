//write a function which takes requests array and genre array as argument.
// it returns an array of items with 1+ matching genre
function prioritizeGenres (requests, genres) {
  return requests.filter((item) =>{
    genres.includes(item.genres)
  })
}

module.exports = prioritizeGenres;
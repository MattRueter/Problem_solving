const {requests, sampleRequests} = require("./requests");
const { prioritizeGenres, selectBooksByGenre } = require("./utils/genres");
const handleDuplicates = require("./utils/handleDuplicates");

function createPurchaseList (requests, budget, genres) {
  if(requests.length <= 0){return null}
  
  //Author priority step:
  // First: filter only books whose genre is a prioritized one.
  // const authorPrioritzed(requests, authors);
  // Second:  check books are within budget. Return as many as possible.
  //const purchaseAuthors = selectBooksByAuthor(authorPrioritized, budget).map((book) => book);

  //Genre priority step:
  // First: filter only books whose genre is a prioritized one.
  const genrePrioritized = prioritizeGenres(requests, genres);
  // Second: Get rid of duplicates
  const genreCleaned = handleDuplicates(genrePrioritized)
  // Second: check books by are within budget. Return as many as possible.
  const purchaseGenres = selectBooksByGenre(genreCleaned, budget).map((book) => book);
  
 

  //Next we need to add as many other requested books as budget allows. *consider optimizing for including from range of users?
  //Iterate over the rest of the books in request array and if the book doesn't exceed budget add it otherwise reject it.
  
  //Combine all lists for the final purchaseList
  //return purchaseList;
  return purchaseGenres
}

module.exports = createPurchaseList;


const {requests, sampleRequests} = require("./requests");
const { prioritizeGenres, selectBooksByGenre } = require("./utils/genres");

function createPurchaseList (requests, budget, genres) {
  if(requests.length <= 0){return null}
  let purchaseList = [];
  
  // First: get as many books as possible which belong to genres being prioritized. (genres)
  const priority = prioritizeGenres(requests, genres);
  
  // Second: check 'priority' books are within budget. Get as many as possible and add them 
  // to purchaseList.
  purchaseList = selectBooksByGenre(priority, budget).map((book) => book);
  
 

  //Next we need to add as many other requested books as budget allows. *consider optimizing for including from range of users?
  //Iterate over the rest of the books in request array and if the book doesn't exceed budget add it otherwise reject it.
  
  //At this point the purchaseList will be complete.
  return purchaseList;
}

module.exports = createPurchaseList;


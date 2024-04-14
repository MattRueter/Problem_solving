const { requests, sampleRequests } = require("../requests");
const handleDuplicates = require("./handleDuplicates");

function prioritizeGenres (requests, genres) {
  const filteredBooks = requests.filter((item) =>{
    if(genres.includes(item.genres)){
      return true
    }
    return false
  })
  const sortedBooks = filteredBooks.sort((a,b) => a.price - b.price)
  return sortedBooks
}


//Write a function which two parameters (array of books, budget:number) and returns an array of as many books fit within budget.

function selectBooksByGenre (filteredRequests, budget) {
  let booksToPurchase = [];
  let purchaseTotal = 0;
  
 
  const total = filteredRequests.reduce((a,c) =>{
    return a + c.price
  },0);

  //if all are within budget return the whole array. No need to select.
  if(total <= budget ){
    return filteredRequests
  }

  //push books into the purchase list until budget is spent OR no more books. 
  filteredRequests.forEach((book) => {
    if(book.price + purchaseTotal <= budget){
      booksToPurchase.push(book)
      purchaseTotal += book.price
    }
  })
  
  return booksToPurchase
}


module.exports = { prioritizeGenres, selectBooksByGenre }
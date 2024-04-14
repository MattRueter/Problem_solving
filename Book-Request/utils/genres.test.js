const { prioritizeGenres, selectBooksByGenre } = require("./genres");
const {requests, sampleRequests} = require("../requests");

//Filtering for those which mathc genre priorities.
test("Returns empty array if no books match genres.", () => {  
  expect(prioritizeGenres(requests, ["Obscure Genre"])).toStrictEqual([])
});

test("Filters books matching one genre.", () =>{
  const result = prioritizeGenres(requests, ["Fantasy"]);
  result.forEach(item => {
    expect(item.genres).toBe("Fantasy")
  })
});

test("Filters books matching more than one genre.", () => {
  const result = prioritizeGenres(requests, ["Fantasy", "Science Fiction"]);
  result.forEach(item =>{
    expect(["Fantasy", "Science Fiction"]).toContain(item.genres);
  })
});

test("Filtered books should be orderd by price lowest to highest.", () => {
  const result =[
    { user: 1, title: "The Hobbit", author: "J.R.R. Tolkien", genres: "Fantasy", price: 21 },
    { user: 1, title: "1984", author: "George Orwell", genres: "Science Fiction", price: 25 },
    { user: 3, title: "1984", author: "George Orwell", genres: "Science Fiction", price: 25 },
  ]
  expect(prioritizeGenres(sampleRequests, ["Science Fiction", "Fantasy"])).toStrictEqual(result)
});


//Choosing books:
test("The whole array is returned if within budget.", () =>{
  expect(selectBooksByGenre(requests, 100000)).toStrictEqual(requests)
});

test("A portion of the array is returned if the whole array is beyond budget.", () =>{
  const result = [ { user: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", genres: "Literature", price: 20 }];
  expect(selectBooksByGenre(requests, 26)).toStrictEqual(result)
});

test("Empty array is returned if every book is out of budget.", () =>{
  expect(selectBooksByGenre(requests, 0)).toStrictEqual([])
});

test("There shouldn't be any duplicate books in returned array.", () =>{
  const req = [
    { user: 1, title: "The Hobbit", author: "J.R.R. Tolkien", genres: "Fantasy", price: 21 },
    { user: 1, title: "1984", author: "George Orwell", genres: "Science Fiction", price: 25 },
    { user: 3, title: "1984", author: "George Orwell", genres: "Science Fiction", price: 25 },
  ]
  const result =[
    { user: 1, title: "The Hobbit", author: "J.R.R. Tolkien", genres: "Fantasy", price: 21 },
    { user: 1, title: "1984", author: "George Orwell", genres: "Science Fiction", price: 25 },
  ]
  expect(selectBooksByGenre(req, 100)).toStrictEqual(result)
});

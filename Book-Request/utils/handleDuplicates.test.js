const handleDuplicates = require("./handleDuplicates");

test("Returned array has no duplicate titles.", () =>{
  const req =[
    { user: 1, title: "The Hobbit", author: "J.R.R. Tolkien", genres: "Fantasy", price: 21 },
    { user: 1, title: "1984", author: "George Orwell", genres: "Science Fiction", price: 25 },
    { user: 3, title: "1984", author: "George Orwell", genres: "Science Fiction", price: 25 },
  ]
  const result =[
    { user: 1, title: "The Hobbit", author: "J.R.R. Tolkien", genres: "Fantasy", price: 21 },
    { user: 3, title: "1984", author: "George Orwell", genres: "Science Fiction", price: 25 },
  ]
  expect(handleDuplicates(req)).toStrictEqual(result)
});

test("Returned array has no duplicate titles.", () =>{
  const req =[
    { user: 1, title: "The Hobbit", author: "J.R.R. Tolkien", genres: "Fantasy", price: 21 },
    { user: 1, title: "1984", author: "George Orwell", genres: "Science Fiction", price: 25 },
    { user: 1, title: "Pnin", author: "Vladimr Nabokov", genres: "Literature", price: 25 },
    { user: 3, title: "1984", author: "George Orwell", genres: "Science Fiction", price: 27 },
  ]
  const result =[
    { user: 1, title: "The Hobbit", author: "J.R.R. Tolkien", genres: "Fantasy", price: 21 },
    { user: 1, title: "Pnin", author: "Vladimr Nabokov", genres: "Literature", price: 25 },
    { user: 3, title: "1984", author: "George Orwell", genres: "Science Fiction", price: 27 },
  ]
  expect(handleDuplicates(req)).toStrictEqual(result)
});
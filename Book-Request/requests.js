// allGenres is for reference when using genres to prioritize.
const allGenres = [
  "Literature",
  "Classic",
  "Science Fiction",
  "Dystopian",
  "Coming-of-age",
  "Romance",
  "Fantasy",
  "Adventure",
  "Young Adult",
  "Magic",
  "Mystery",
  "Thriller",
  "Philosophical"
];


const userRequests = [
  {
    user: 1,
    requests: [
      { title: "The Great Gatsby", author: "F. Scott Fitzgerald", genres: ["Literature", "Classic"], price: 20 },
      { title: "To Kill a Mockingbird", author: "Harper Lee", genres: ["Literature", "Classic"], price: 18 },
      { title: "1984", author: "George Orwell", genres: ["Science Fiction", "Dystopian"], price: 25 },
      { title: "The Catcher in the Rye", author: "J.D. Salinger", genres: ["Literature", "Coming-of-age"], price: 17 },
      { title: "Pride and Prejudice", author: "Jane Austen", genres: ["Literature", "Romance"], price: 16 },
      { title: "The Hobbit", author: "J.R.R. Tolkien", genres: ["Fantasy", "Adventure"], price: 21 },
      { title: "The Hunger Games", author: "Suzanne Collins", genres: ["Young Adult", "Dystopian"], price: 19 },
      { title: "Harry Potter and the Sorcerer's Stone", author: "J.K. Rowling", genres: ["Fantasy", "Magic"], price: 23 },
      { title: "The Da Vinci Code", author: "Dan Brown", genres: ["Mystery", "Thriller"], price: 24 },
      { title: "The Lord of the Rings", author: "J.R.R. Tolkien", genres: ["Fantasy", "Adventure"], price: 28 }
    ]
  },
  {
    user: 2,
    requests: [
      { title: "The Great Gatsby", author: "F. Scott Fitzgerald", genres: ["Literature", "Classic"], price: 20 },
      { title: "The Catcher in the Rye", author: "J.D. Salinger", genres: ["Literature", "Coming-of-age"], price: 17 },
      { title: "Pride and Prejudice", author: "Jane Austen", genres: ["Literature", "Romance"], price: 16 },
      { title: "The Hobbit", author: "J.R.R. Tolkien", genres: ["Fantasy", "Adventure"], price: 21 },
      { title: "Harry Potter and the Sorcerer's Stone", author: "J.K. Rowling", genres: ["Fantasy", "Magic"], price: 23 }
    ]
  },
  {
    user: 3,
    requests: [
      { title: "1984", author: "George Orwell", genres: ["Science Fiction", "Dystopian"], price: 25 },
      { title: "The Da Vinci Code", author: "Dan Brown", genres: ["Mystery", "Thriller"], price: 24 }
    ]
  },
  {
    user: 4,
    requests: [
      { title: "The Hunger Games", author: "Suzanne Collins", genres: ["Young Adult", "Dystopian"], price: 19 },
      { title: "The Lord of the Rings", author: "J.R.R. Tolkien", genres: ["Fantasy", "Adventure"], price: 28 }
    ]
  },
  {
    user: 5,
    requests: [
      { title: "The Girl with the Dragon Tattoo", author: "Stieg Larsson", genres: ["Mystery", "Thriller"], price: 26 }
    ]
  },
  {
    user: 6,
    requests: [
      { title: "The Martian", author: "Andy Weir", genres: ["Science Fiction", "Thriller"], price: 27 }
    ]
  },
  {
    user: 7,
    requests: [
      { title: "The Chronicles of Narnia", author: "C.S. Lewis", genres: ["Fantasy", "Adventure"], price: 18 }
    ]
  },
  {
    user: 8,
    requests: [
      { title: "The Fault in Our Stars", author: "John Green", genres: ["Young Adult", "Romance"], price: 22 }
    ]
  },
  {
    user: 9,
    requests: [
      { title: "The Alchemist", author: "Paulo Coelho", genres: ["Fiction", "Philosophical"], price: 20 }
    ]
  },
  {
    user: 10,
    requests: [
      { title: "Brave New World", author: "Aldous Huxley", genres: ["Science Fiction", "Dystopian"], price: 24 }
    ]
  }
];

const requests = [
  { user: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", genres: ["Literature", "Classic"], price: 20 },
  { user: 1, title: "To Kill a Mockingbird", author: "Harper Lee", genres: ["Literature", "Classic"], price: 18 },
  { user: 1, title: "1984", author: "George Orwell", genres: ["Science Fiction", "Dystopian"], price: 25 },
  { user: 1, title: "The Catcher in the Rye", author: "J.D. Salinger", genres: ["Literature", "Coming-of-age"], price: 17 },
  { user: 1, title: "Pride and Prejudice", author: "Jane Austen", genres: ["Literature", "Romance"], price: 16 },
  { user: 1, title: "The Hobbit", author: "J.R.R. Tolkien", genres: ["Fantasy", "Adventure"], price: 21 },
  { user: 1, title: "The Hunger Games", author: "Suzanne Collins", genres: ["Young Adult", "Dystopian"], price: 19 },
  { user: 1, title: "Harry Potter and the Sorcerer's Stone", author: "J.K. Rowling", genres: ["Fantasy", "Magic"], price: 23 },
  { user: 1, title: "The Da Vinci Code", author: "Dan Brown", genres: ["Mystery", "Thriller"], price: 24 },
  { user: 1, title: "The Lord of the Rings", author: "J.R.R. Tolkien", genres: ["Fantasy", "Adventure"], price: 28 },
  { user: 2, title: "The Great Gatsby", author: "F. Scott Fitzgerald", genres: ["Literature", "Classic"], price: 20 },
  { user: 2, title: "The Catcher in the Rye", author: "J.D. Salinger", genres: ["Literature", "Coming-of-age"], price: 17 },
  { user: 2, title: "Pride and Prejudice", author: "Jane Austen", genres: ["Literature", "Romance"], price: 16 },
  { user: 2, title: "The Hobbit", author: "J.R.R. Tolkien", genres: ["Fantasy", "Adventure"], price: 21 },
  { user: 2, title: "Harry Potter and the Sorcerer's Stone", author: "J.K. Rowling", genres: ["Fantasy", "Magic"], price: 23 },
  { user: 3, title: "1984", author: "George Orwell", genres: ["Science Fiction", "Dystopian"], price: 25 },
  { user: 3, title: "The Da Vinci Code", author: "Dan Brown", genres: ["Mystery", "Thriller"], price: 24 },
  { user: 4, title: "The Hunger Games", author: "Suzanne Collins", genres: ["Young Adult", "Dystopian"], price: 19 },
  { user: 4, title: "The Lord of the Rings", author: "J.R.R. Tolkien", genres: ["Fantasy", "Adventure"], price: 28 },
  { user: 5, title: "The Girl with the Dragon Tattoo", author: "Stieg Larsson", genres: ["Mystery", "Thriller"], price: 26 },
  { user: 6, title: "The Martian", author: "Andy Weir", genres: ["Science Fiction", "Thriller"], price: 27 },
  { user: 7, title: "The Chronicles of Narnia", author: "C.S. Lewis", genres: ["Fantasy", "Adventure"], price: 18 },
  { user: 8, title: "The Fault in Our Stars", author: "John Green", genres: ["Young Adult", "Romance"], price: 22 },
  { user: 9, title: "The Alchemist", author: "Paulo Coelho", genres: ["Fiction", "Philosophical"], price: 20 },
  { user: 10, title: "Brave New World", author: "Aldous Huxley", genres: ["Science Fiction", "Dystopian"], price: 24 }
];

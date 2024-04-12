# Book Requests
The problem:
A local public library takes requests from users when making book purchases. Users can suggest as many books as they like however there is no guarantee the library will purhcase each of the books. 
They have the following constraints.

1. Budget: Total purchase price can't exceed the budget.
2. Genre Prioritization: If library has genre "goals", prioritize those genres. Otherwise genres don't matter.
3. Pleasing Users: All else being equal the purchases should include at least one book requested by each user.

Write a funnction which takes in a requests [object-array], budget [number] and optional genres [string-array]. The function returns an array of books to purchase  based on calculations made to the requests array and within the constraints.

## Challenges
The budget is prioritized in all cases. If genres are specified there might be cases where some books get left out of final purchase list if adding them exceeds the budget.

Pleasing all users (i.e. including at least one book from each) is the last of the priorities. That is if all genres have been included but not all users, swapping a book to please a user shouldn't exclude a given genre.

## General approach
1. Create some "constraint" variables:
```js
//constraint variables.
let budget = budget;
let genres = //get genres out of requests array (exlcude duplicates)
let users = // get users out of requess array (exclude duplicates)
```

Choose book?

Three options:
1. reject
2. ignore
3. choose

Questions:
1. Does book price exceed budget?
    * yes? => reject
    * no? => continue

2. Is book's genre on genre priority list?
    * no? => ignore GO ON TO NEXT BOOK
    * yes => is genre already represented?
        * no? => ADD  and GO ON TO NEXT BOOK
        * yes? => ignore GO ON TO NEXT BOOK 

3. Is user already represented?
    * yes? ignore
    * no? ADD and GO ON TO NEXT BOOK


GOTCHAS!

1. A request array may have no books matching one of the genre priorities. 

### or
Another approach may be to filter only books with genre matchhing priorities. If money still left in budget move on to the rest of the books in the request array.


## Variations
### Easy
Budget is the only constraint.

### Medium
Budget and Genre prioritization are the only constraints.

### Medium alternative
Budget and pleasing users are the only constraints.

### Extra challenge
Original problem but instead of using 'requests' array start with the original 'userRequests' array.

# !
The unit tests have been written 
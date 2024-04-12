# Book Requests
The problem:
A local public library takes requests from users when making book purchases. Users can suggest as many books they like however there is no guarantee the library will purhcase each of the books. 
They have the following constraints.

1. Budget: Total purchase price can't exceed the budget.
2. Genre Prioritization: If library has genre "goals", prioritize those genres. Otherwise genres don't matter.
3. Pleasing Users: All else being equal the purchases should include at least one book requested by each user.

Write a funnction which takes in a requests [object-array], budget [number] and optional genres [string-array]. The function returns an array of books to purchase  based on calculations made to the requests array and within the constraints.

## Variations
### Easy
Budget is the only constraint.

### Medium
Budget and Genre prioritization are the only constraints.

### Medium alternative
Budget and pleasing users are the only constraints.

### Extra challenge
Original problem but instead of using 'requests' array start with the original 'userRequests' array.


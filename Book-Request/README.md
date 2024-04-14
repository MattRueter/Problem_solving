# Book Requests
## The problem:

When making quarterly purchases a local library will take into consideration requests from users. In making the final list of books to purhcase here is their workflow.

1. Make a list of books to purhcase that the library management feels would be useful.
2. If the budget allows, include books previously requested by 'n' number of users.

---

3. Add user requests by authors being prioritized by library.
4. Add user requests which belong to genres being prioritized by library.
5. Add any remaining requests that budget allows.
6. Any requested books not purchased get added to a previously requested DB to be used in step 2 above at a future date.

Write a program which deals with 3-6. The idea is that elsewhere in their system the library has already generated a partial list consisting of points 1-2. Our program is going to take in an array of objects representing user requests and purchase as MANY books as budget allows at each "prioritization step". 


## Constraints and Gotchas:
1. Select as many books as possible at each "prioritization step". This means sorting from cheapest to most expensive (and that more expensive books are less likely to be purchased).

2. At each step we'll need to handle books which have more than 'n'number of requests and prioritize those (this would be an exception to the 'as many books as possible' rule).

3. Books already in collection are taken out of request array before making it to this program.

const  {requests, sampleRequests,allGenres } = require("./requests");
const createPurchaseList = require("./book_request");


test("Return null if no requests.", () =>{
  expect(createPurchaseList([], 1000, ["Fantasy"])).toBe(null)
});

test("If all books are out of budget. Return empty array", () => {
  expect(createPurchaseList(requests,0,allGenres)).toStrictEqual([])
});

test("All books in request belong to prioritized genres.", () => {
  const genres = ["Fantasy", "Literature", "Science Fiction","Young Adult" ];
  const result = createPurchaseList(sampleRequests,1000, genres);
  result.forEach(item =>{
    expect(genres).toContain(item.genres)
  })
});

test("All books in request belong to prioritized genres pt2.", () => {
  const result = createPurchaseList(requests,1000, allGenres);   
  result.forEach(item =>{
    expect(allGenres).toContain(item.genres)
  })
});
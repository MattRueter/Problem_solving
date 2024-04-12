const prioritizeGenres = require("./genres");
const requests = require("../requests");

test("Filters books with matching genre Fantasy.", () =>{
  const filteredArray = requests.filter((item) =>{
    item.genres === "Fantasy"
  })
  expect(prioritizeGenres(requests, ["Fantasy"])).toEqual(filteredArray)
});
test("Filters books with matching genres Science Fiction and Fantasy", () => {
  const filteredArray = requests.filter((item) =>{
    item.genres === "Science Fiction"
  })
  expect(prioritizeGenres(requests, ["Science Fiction", "Fantasy"])).toEqual(filteredArray)
});
test("Filters fine even if no books have a prioritized genre", () => {
  const filteredArray = requests.filter((item) =>{
    item.genres === "Science Fiction"
  })
  expect(prioritizeGenres(requests, ["Not Requested"])).toEqual(filteredArray)
});
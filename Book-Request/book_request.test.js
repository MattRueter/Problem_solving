const requests = require("./requests");
const createPurchaseList = require("./book_request");


test("Total price doesn't exceed budget.", () =>{
  const budget = 100;
  const purchaseList = createPurchaseList(requests, budget, ["none"]);
  const totalPrice = purchaseList.reduce((a,c) =>{
    return a + c.price;
  },0);
  expect(totalPrice).toBeLessThanOrEqual(budget);
});

const requests = require("./requests");

function createPurchaseList (requests, budget, genres) {
  let purchaseList = [];
  let totalPrice = 0;

  for(let i = 0; i <= requests.length-1; i++){
    if(requests[i].price + totalPrice <= budget){
      purchaseList.push(requests[i]);
      totalPrice += requests[i].price;
    }else{
      break
    }
  }
  return purchaseList;
}


module.exports = createPurchaseList;

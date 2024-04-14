//Write a function which takes an array of book request objects and gets rid of duplicate books. 
//It should return an array without duplicates.

function handleDuplicates (requests) {
  for(let i=0; i<requests.length-1; i++){
    if(requests[i].title === requests[i+1].title ){
      requests.splice(i,1, null)
    }
  }
  requests = requests.filter((item) => item != null);
  return requests
}

module.exports = handleDuplicates
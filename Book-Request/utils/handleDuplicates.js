function handleDuplicates (requests) {
  const seenTitles = new Set();
  const uniqueRequests = [];

  for(let i = requests.length-1; i>=0; i--){
    const request = requests[i];
    if(!seenTitles.has(request.title)){
      seenTitles.add(request.title);
      uniqueRequests.unshift(request);
    }
  }
  return uniqueRequests;
}

module.exports = handleDuplicates
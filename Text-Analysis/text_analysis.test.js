const testObj = require('./text_analysis');

const countBlanks = testObj.countBlanks

test("countBlanks returns number of characters in text", () =>{
	expect(countBlanks('food is great')).toBe(13);
});
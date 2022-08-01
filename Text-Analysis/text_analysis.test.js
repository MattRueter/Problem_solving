const CountBlanks = require('./text_analysis');

//CountBlanks().characterCount
test("countBlanks returns number of characters in text", () =>{
	expect(CountBlanks('food is great').characterCount).toBe(13);
});


//tells us the number of words
test("CountBlanks returns number of words in a text.", () =>{
	expect(CountBlanks("I have three").wordCount()).toBe(3);
});
test("CountBlanks.wordCount ignores digits.", () =>{
	expect(CountBlanks("I have 3").wordCount()).toBe(2);
});
test("CountBlanks.wordCount ignores symbols.", () =>{
	expect(CountBlanks("I have !").wordCount()).toBe(2);
});
test("CountBlanks.wordCount ignores non-letters in middle of text.", () =>{
	expect(CountBlanks("Matt ! I have 3 dogs").wordCount()).toBe(4)
});
test("CountBlanks.wordCount ignores non-letters in middle and end of text.", () =>{
	expect(CountBlanks("Matt ! I have 3 dogs!").wordCount()).toBe(4)
});

//tells us about the longest word.
test.skip("CountBlanks returns longest word & its length.", () =>{
	expect(CountBlanks("The longest word").longestWord).toBe("Longest word: 'longest' - it has 7 letters")
});
test.skip("CountBlanks returns longest word & its length for one letter word.", () =>{
	expect(CountBlanks("a").longestWord).toBe("Longest word: 'a' - it has 1 letter")
});
test.skip("CountBlanks.longestWord ignores digits.", () =>{
	expect(CountBlanks("a 357").longestWord).toBe("Longest word: 'a' - it has 1 letter")
});
test.skip("CountBlanks.longestWord ignores symbols.", () =>{
	expect(CountBlanks("a 357 !!!").longestWord).toBe("Longest word: 'a' - it has 1 letter")
});


//tells us about the shortest word
test.skip("CountBlanks.shortestWord returns shortest word & length.", () =>{
	expect(CountBlanks("the five barbarians").shortestWord).toBe("the")
});
test.skip("CountBlanks.shortestWord ignores digits.", () =>{
	expect(CountBlanks("the 5 barbarians").shortestWord).toBe("the")
});
test.skip("CountBlanks.shortestWord ignores symbols.", () =>{
	expect(CountBlanks("the 5 barbarians !!").shortestWord).toBe("the")
});
test.skip("CountBlanks.shortestWord accepts argument to ignore a given word.", () =>{
	expect(CountBlanks("the five barbarians").shortestWord('the')).toBe("five")
});
test.skip("CountBlanks.shortestWord accepts argument to ignore 2+ words.", () =>{
	expect(CountBlanks("the five barbarians").shortestWord('the','five')).toBe("barbarians")
});
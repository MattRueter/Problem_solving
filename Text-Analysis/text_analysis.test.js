const AnalyzeText = require('./text_analysis');

//AnalyzeText().characterCount
test("AnalyzeText returns number of characters in text", () =>{
	expect(AnalyzeText('food is great').characterCount).toBe(13);
});


//tells us the number of words
test("AnalyzeText returns number of words in a text.", () =>{
	expect(AnalyzeText("I have three").wordCount()).toBe(3);
});
test("AnalyzeText.wordCount ignores digits.", () =>{
	expect(AnalyzeText("I have 3").wordCount()).toBe(2);
});
test("AnalyzeText.wordCount ignores symbols.", () =>{
	expect(AnalyzeText("I have !").wordCount()).toBe(2);
});
test("AnalyzeText.wordCount ignores non-letters in middle of text.", () =>{
	expect(AnalyzeText("Matt ! I have 3 dogs").wordCount()).toBe(4)
});
test("AnalyzeText.wordCount ignores non-letters in middle and end of text.", () =>{
	expect(AnalyzeText("Matt ! I have 3 dogs!").wordCount()).toBe(4)
});

//tells us about the longest word.
test.skip("AnalyzeText returns longest word & its length.", () =>{
	expect(AnalyzeText("The longest word").longestWord).toBe("Longest word: 'longest' - it has 7 letters")
});
test.skip("AnalyzeText returns longest word & its length for one letter word.", () =>{
	expect(AnalyzeText("a").longestWord).toBe("Longest word: 'a' - it has 1 letter")
});
test.skip("AnalyzeText.longestWord ignores digits.", () =>{
	expect(AnalyzeText("a 357").longestWord).toBe("Longest word: 'a' - it has 1 letter")
});
test.skip("AnalyzeText.longestWord ignores symbols.", () =>{
	expect(AnalyzeText("a 357 !!!").longestWord).toBe("Longest word: 'a' - it has 1 letter")
});


//tells us about the shortest word
test.skip("AnalyzeText.shortestWord returns shortest word & length.", () =>{
	expect(AnalyzeText("the five barbarians").shortestWord).toBe("the")
});
test.skip("AnalyzeText.shortestWord ignores digits.", () =>{
	expect(AnalyzeText("the 5 barbarians").shortestWord).toBe("the")
});
test.skip("AnalyzeText.shortestWord ignores symbols.", () =>{
	expect(AnalyzeText("the 5 barbarians !!").shortestWord).toBe("the")
});
test.skip("AnalyzeText.shortestWord accepts argument to ignore a given word.", () =>{
	expect(AnalyzeText("the five barbarians").shortestWord('the')).toBe("five")
});
test.skip("AnalyzeText.shortestWord accepts argument to ignore 2+ words.", () =>{
	expect(AnalyzeText("the five barbarians").shortestWord('the','five')).toBe("barbarians")
});
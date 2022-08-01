const AnalyzeText = (text) =>{
	let characterCount = text.length;
	
	const wordCount = () =>{
		let textSize = text.length-1;
		let words = [];
		let currentWord ='';
		let numberOfWords;

		for(let i=0; i<=textSize; i++){
			//eventually use regEx for any non-letter matching.

	
			

		}
		numberOfWords = words.length;

		return numberOfWords;
	}
	
	
	
	
	
	
	
	return {characterCount, wordCount};
}


module.exports = AnalyzeText;
const AnalyzeText = (text) =>{
	let characterCount = text.length;
	
	const wordCount = () =>{
		let textSize = text.length-1;
		let words = [];
		let currentWord ='';
		let numberOfWords;

		let isLetter =/[a-zA-Z]/;

		for(let i=0; i<=textSize; i++){
			if(isLetter.test(text[i]) && text[i] !== textSize){
				currentWord += text[i];
			}else if(isLetter.test(text[i]) && text[i]===textSize){
				currentWord += text[i];
				words.push(currentWord);
			}else if( text[i]===" " && currentWord !=='') {
				words.push(currentWord);
				currentWord ='';
			}
	
		

		}
		if(currentWord !==''){
			words.push(currentWord);
		}

		numberOfWords = words.length;
		console.log(words);
		return numberOfWords;
	}
	
	
	
	
	
	
	
	return {characterCount, wordCount};
}


module.exports = AnalyzeText;
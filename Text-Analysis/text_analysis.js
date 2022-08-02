const AnalyzeText = (text) =>{
	let characterCount = text.length;
	
	const wordCount = () =>{
		const numberOfWords = createWordOnlyArray().length;

		return numberOfWords;
	}

	const longestWord = () =>{
		//text = "The longest word."
		let longest ='';
		let length = 0;
		let words = createWordOnlyArray();
		let msg;

		for( let i=0; i<=words.length-1; i++ ){
			counter = 0;
			for( let c = 0; c<=words[i].length-1 ; c++ ){
				counter++;
				if(counter >= length){
					length = counter;
					longest = words[i];
				}
			}
		}

		if(length === 1){
			msg = `Longest word: '${longest}' - it has ${length} letter`
		}else{
			msg = `Longest word: '${longest}' - it has ${length} letters`
		}
		return msg;
	}
	
	
	
	
	
	const createWordOnlyArray = () =>{
		//this returns an array indexing each item of the text 
		//ignoring symbols and digits.
		let textSize = text.length-1;
		let words = [];
		let currentWord ='';
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
		return words;
	}
	
	return {characterCount, wordCount, longestWord};
}


module.exports = AnalyzeText;
const AnalyzeText = (text) =>{
	let characterCount = text.length;
	
	const wordCount = () =>{
		const numberOfWords = createWordOnlyArray().length;

		return numberOfWords;
	}

	const longestWord = () =>{
		//text = "The longest word."
		let words = createWordOnlyArray();
		let longest ='';
		let length = 0;
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

	const shortestWord = (minLength=0) =>{
		let words = createWordOnlyArray();
		let shortest ='';
		let length = 0;
		let msg;
	
		for( let i=0; i<=words.length-1; i++ ){
			if(words[i].length < minLength){
		
			}else if(words[i].length <= shortest.length || shortest.length === 0){
				shortest = words[i];
				length = words[i].length;
			}
		}
		if(minLength !=0){
				msg = `Shortest word (${minLength} characters or longer): '${shortest}' - it has ${length} letters`;
		}else{
			if(length === 1){
				msg = `Shortest word: '${shortest}' - it has ${length} letter`;
			}else{
				msg = `Shortest word: '${shortest}' - it has ${length} letters`;
			}
		}
		return msg;
	}
	
	
	
	
	
	const createWordOnlyArray = () =>{
		 //("I am a text to analyze.") returns ['I', 'am', 'a', 'text', 'to', 'analyze']
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
	
	return {characterCount, wordCount, longestWord, shortestWord};
}


module.exports = AnalyzeText;
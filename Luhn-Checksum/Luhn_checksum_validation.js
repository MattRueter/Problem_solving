const reverseInput = (idNumber) => {
	let idNumberReversed ="";
	let i = idNumber.length-1;
	while(i>=0){
		if(idNumber[i]=== " "){
			i--;
		}else{
			idNumberReversed += idNumber[i];
			i--;	
		}
		
	}

	return idNumberReversed;
}

const doubleDigits = (doubledDigit) => {
	doubledDigit = doubledDigit * 2
	let remainder;
	let sum;
	if(doubledDigit >=10){
		remainder = doubledDigit%10;
		sum = 1+remainder;
	}else{
		sum = doubledDigit;
	}

	return sum;
}



module.exports = {
	reverseInput:reverseInput,
	doubleDigits:doubleDigits
};
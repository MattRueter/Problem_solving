const checkSum = (idNumber) =>{
	let toNumber;
	let sumDigits = 0;
	idNumber = reverseInput(idNumber)
	
	let i = idNumber.length-1;
	while(i>=0){
		
		if( i===0 || i%2 ===0){
			//add digit without doubling
			toNumber = +idNumber[i];
			sumDigits += toNumber;
			i--;
		}else{
			//double the digit
			toNumber = +idNumber[i];
			sumDigits += doubleDigits(toNumber);
			i--;
		}
	}

	return sumDigits
}

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
	//reverseInput('123456') returns '654321'
	//need to reverse the input so it is 
	//consistently doubling every other starting from the second from the right. regardless of length.
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
	//doubleDigits(4) 	returns '8'
	//doubleDigitis(5) 	returns '1+0' or '1'
	//doubleDigits(6)	returns '1+2' or '3'
}



module.exports = {
	checkSum:checkSum,
	reverseInput:reverseInput,
	doubleDigits:doubleDigits
};
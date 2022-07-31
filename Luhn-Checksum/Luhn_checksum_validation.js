
const handleDoubleDigits = (doubledDigit) => {
	let toSum = doubledDigit*2;
	let remainder;
	if(doubledDigit >=10){
		remainder = doubledDigit%10;
		toSum = 1+remainder;
	}

	return toSum;
}



module.exports = handleDoubleDigits;
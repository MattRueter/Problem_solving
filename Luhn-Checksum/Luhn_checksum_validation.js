
const handleDoubleDigits = (doubledDigit) => {
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



module.exports = handleDoubleDigits;
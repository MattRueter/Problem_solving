const testObj = require('./Luhn_checksum_validation');

const checkSum = testObj.checkSum;
const reverseInput = testObj.reverseInput;
const doubleDigits = testObj.doubleDigits;


// if an id# digit is doubled and is 10 or greater, 
//each digit will need to be added individually.
// e.g. ('12') will be ('1+2') not ('+12').
test("when double digit is 5 --- 1 and 0 get added", () =>{
	expect(doubleDigits(5)).toBe(1);
});
test("when double digit is 6 --- 1 and 2 get added", () =>{
	expect(doubleDigits(6)).toBe(3);
});
test("when double digit is 7 --- 1 and 4 get added", () =>{
	expect(doubleDigits(7)).toBe(5);
});
test("when double digit is 8 --- 1 and 6 get added", () =>{
	expect(doubleDigits(8)).toBe(7);
});
test("when double digit is 9 --- 1 and 8 get added", () =>{
	expect(doubleDigits(9)).toBe(9);
});
test("when double digit is less than 5 single digit is returned", () =>{
	expect(doubleDigits(4)).toBe(8);
});
test("3 returns 6", () =>{
	expect(doubleDigits(3)).toBe(6);
});
test("2 returns 4", () =>{
	expect(doubleDigits(2)).toBe(4);
});
test("1 returns 2", () =>{
	expect(doubleDigits(1)).toBe(2);
});
test("0 returns 0", () =>{
	expect(doubleDigits(0)).toBe(0);
});

//reverseInput reads the idNumber from right to left and 
//operates on every other digit starting from the first
//on the right.
test("reverseInput reverses two character string", () =>{
	expect(reverseInput("mr")).toBe("rm")
})
test("reverseInput reverses longer string", () =>{
	expect(reverseInput("abcdefghijklmnopqrstuvwxyz")).toBe("zyxwvutsrqponmlkjihgfedcba")
});
test("reverseInput ignores gaps", () =>{
	expect(reverseInput("hello mr")).toBe("rmolleh")
});
test("reverseInput ignores gaps on larger inputs", () =>{
	expect(reverseInput("hello mr rueter")).toBe("reteurrmolleh")
});

//Checksum starts the program and takes the orginal id number as input.
test("checkSum takes '1234' returns as number - 16", () =>{
	expect(checkSum('12340')).toBe(16)
});
test("checkSum takes '0202021' returns as number - 13", () =>{
	expect(checkSum('0202021')).toBe(13)
})
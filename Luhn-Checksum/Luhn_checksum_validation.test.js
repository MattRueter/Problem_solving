const handleDoubledDigits = require('./Luhn_checksum_validation');

test("when double digit is 5 --- 1 and 0 get added", () =>{
	expect(handleDoubledDigits(10)).toBe(1);
});
test("when double digit is 6 --- 1 and 2 get added", () =>{
	expect(handleDoubledDigits(12)).toBe(3);
});
test("when double digit is 7 --- 1 and 4 get added", () =>{
	expect(handleDoubledDigits(14)).toBe(5);
});
test("when double digit is 8 --- 1 and 6 get added", () =>{
	expect(handleDoubledDigits(16)).toBe(7);
});
test("when double digit is 9 --- 1 and 8 get added", () =>{
	expect(handleDoubledDigits(18)).toBe(9);
});
test("when double digit is less than 5 single digit is returned", () =>{
	expect(handleDoubledDigits(4)).toBe(8);
});
test("3 returns 6", () =>{
	expect(handleDoubledDigits(3)).toBe(6);
});
test("2 returns 4", () =>{
	expect(handleDoubledDigits(2)).toBe(4);
});
test("1 returns 2", () =>{
	expect(handleDoubledDigits(1)).toBe(2);
});

test("0 returns 0", () =>{
	expect(handleDoubledDigits(0)).toBe(0);
});
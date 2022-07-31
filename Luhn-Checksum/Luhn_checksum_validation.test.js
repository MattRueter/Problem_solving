const myFunction = require('./Luhn_checksum_validation');

test("project set up correctly.", () =>{
	expect(myFunction("I am alive!")).toBe("I am alive!");
});

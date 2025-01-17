const { passwordCheck } = require("../src/passwordChecker");

describe("Password Checker: check if the password is valid", () => {
    it("Password: When length equals to 8", function() {
        const result = passwordCheck("11111111");
        expect(result).toBe(true);
    });
});
const { passwordCheck } = require("../src/passwordChecker");

describe("Password Checker: check if the password is valid", () => {
    it("Password: When length equals to 8", function() {
        const result = passwordCheck("111111&1");

        expect(result).toBe(true);
    });
    
    it("Password: When length equals to 7", function() {
        const result = passwordCheck("11&1111");

        expect(result).toBe(false);
    });

    it("Password: When length equals to 6", function() {
        const result = passwordCheck("1&1111");

        expect(result).toBe(false);
    });

    it("Password: When length equals to 5", function() {
        const result = passwordCheck("111&1");

        expect(result).toBe(false);
    });
    
    it("Password: When password doesn't contain any special character", function() {
        const result = passwordCheck("11111111");

        expect(result).toBe(false);
    });

    it("Password: When password contains character $", function() {
        const result = passwordCheck("111111$1");

        expect(result).toBe(true);
    });

    it("Password: When password contains character *", function() {
        const result = passwordCheck("111111*1");

        expect(result).toBe(true);
    });

    it("Password: When password doesn't contain any number", function() {
        const result = passwordCheck("aaaa$a$a");

        expect(result).toBe(false);
    });

    it("Password: When password contains 2", function() {
        const result = passwordCheck("aa2a$a$a");

        expect(result).toBe(true);
    });
});
function containsSpecialChars(password) {
    const specialCharacters = /[!@#$%^&*(),.?":{}|<>]/g;
    return specialCharacters.test(password);
}

function passwordCheck(password) {
    if (password.length < 8 || !containsSpecialChars(password)) return false;

    const numberCharacters = /[0123456789]/g;
    if(!numberCharacters.test(password)) return false;
    return true;
}

module.exports = { passwordCheck };
function passwordCheck(password) {
    if (password.length < 8) return false;

    const specialCharacters = /[!@#$%^&*(),.?":{}|<>]/g;
    if (!specialCharacters.test(password)) return false;

    const numberCharacters = /[0123456789]/g;
    if(!numberCharacters.test(password)) return false;
    return true;
}

module.exports = { passwordCheck };
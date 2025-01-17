function passwordCheck(password) {
    if (password.length < 8) return false;

    const specialCharacters = /[!@#$%^&*(),.?":{}|<>]/g;
    if (!specialCharacters.test(password)) return false;

    if(!password.includes("1") && !password.includes("2")) return false;
    return true;
}

module.exports = { passwordCheck };
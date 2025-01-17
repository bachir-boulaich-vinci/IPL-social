function passwordCheck(password) {
    if(password.length === 7 || password.length === 6) return false;

    return true;
}

module.exports = { passwordCheck };
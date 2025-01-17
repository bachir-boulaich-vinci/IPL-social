function passwordCheck(password) {
    if(password.length === 7) return false;
    return true;
}

module.exports = { passwordCheck };
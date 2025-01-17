function passwordCheck(password) {
    if (password.length < 8) return false;
    if (!password.includes("&")) return false;
    return true;
}

module.exports = { passwordCheck };
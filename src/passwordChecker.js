function containsSpecialChars(password) {
  const specialCharacters = /[!@#$%^&*(),.?":{}|<>]/g;
  return specialCharacters.test(password);
}

function containsNumberChars(password) {
  const numberCharacters = /[0123456789]/g;
  return numberCharacters.test(password);
}

function passwordCheck(password) {
  if (
    password.length < 8 ||
    !containsSpecialChars(password) ||
    !containsNumberChars(password)
  )
    return false;

  if(password.toUpperCase().includes("IPL")) return false;
  return true;
}

module.exports = { passwordCheck };

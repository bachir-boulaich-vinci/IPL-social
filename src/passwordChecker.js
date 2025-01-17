function containsSpecialChars(password) {
  const specialCharacters = /[!@#$%^&*(),.?":{}|<>]/;
  return specialCharacters.test(password);
}

function containsNumberChars(password) {
  const numberCharacters = /[0123456789]/;
  return numberCharacters.test(password);
}

function containsIPL(password){
    return password.toUpperCase().includes("IPL");
}

function passwordCheck(password) {
  if (
    password.length < 8 ||
    !containsSpecialChars(password) ||
    !containsNumberChars(password) ||
    containsIPL(password)
  )
    return false;
  return true;
}

module.exports = { passwordCheck };

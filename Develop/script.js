// Assignment code here
const empty = "";
const capitol = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "~!@#$%^&*-_";

const passwordLength = document.getElementById("p-length");
const upperCase = document.getElementById("p-uppercase");
const lowerCase = document.getElementById("p-lowercase");
const pNumber = document.getElementById("p-number");
const pSymbol = document.getElementById("p-symbol");
const submit = document.getElementById("submit");
const password = document.getElementById("password");

submit.addEventListener("click", () => {
  let initialPassword = empty;
    (upperCase.checked) ? initialPassword += capitol : "";
    (lowerCase.checked) ? initialPassword += lowCase : "";
    (pNumber.checked) ? initialPassword += number : "";
    (pSymbol.checked) ? initialPassword += symbol : "";

    password.value = generatePassword(passwordLength.value, initialPassword)
});

function generatePassword(l, initialPassword) {
    let pass = "";
    for (let i = 0; i < l; i++) {
      pass += initialPassword.charAt(Math.floor(Math.random() * initialPassword.length));

    }
    return pass;
}


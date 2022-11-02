// TODO: Based on the rules here, return an object with a properties `className` and `message`
//
// - A password with length less than 6 has `message` 'Short' and `className` 'short'
//
// Otherwise, we assign the password a score representing its strength. The
// score starts at 0 and will be incremented by one for each of the following
// conditions the password satisfies:
//
// - The password has length longer than 7
// - The password has at least one capital and lowercase letter
// - The password has at least one letter and at least one number
// - The password contains at two or more symbols
//
// We define symbols to be the following characters:
//    '!', '%', '&', '@', '#', '$', '^', '*', '?', '_', '~'
//
// Based on the value from the rules above, return the object with the correct
// values from the corresponding table:
//
// | Score | Class Name | Message         |
// |-------+------------+-----------------|
// | s < 2 | weak       | Weak Password   |
// | s = 2 | good       | Good Password   |
// | s > 2 | strong     | Strong Password |
function checkCase(str) {
  let upper = 0
  let lower = 0;
  for (let i = 0; i < str.length; i++){
    if (str[i] == str[i].toUpperCase()){
      upper = 1;
    }
    if (str[i] == str[i].toLowerCase()){
      lower = 1;
    }
    if ((upper + lower) > 1){
      return 1;
    }
  }
}

function checkCharAndNum(str) {
  let isNumber = 0;
  let isLetter = 0;
  for (let i = 0; i < str.length; i++){
    let code = str.charCodeAt(i);
    if (code >= 48 && code <= 57){
      isNumber = 1;
    }
    if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)){
      isLetter = 1;
    }
    if ((isNumber + isLetter) > 1) {
      return 1;
    } 
  }
}

function checkSymbols(str) {
  let symbolCount = 0;
  for (let i = 0; i < str.length; i++){
    if (str[i] == '!') {
      symbolCount += 1;
    }
    if (str[i] == '%') {
      symbolCount += 1;
    }
    if (str[i] == '&') {
      symbolCount += 1;
    }
    if (str[i] == '@') {
      symbolCount += 1;
    }
    if (str[i] == '#') {
      symbolCount += 1;
    }
    if (str[i] == '$') {
      symbolCount += 1;
    }
    if (str[i] == '^') {
      symbolCount += 1;
    }
    if (str[i] == '*') {
      symbolCount += 1;
    }
    if (str[i] == '?') {
      symbolCount += 1;
    }
    if (str[i] == '_') {
      symbolCount += 1;
    }
    if (str[i] == '~') {
      symbolCount += 1;
    }
  }
  if (symbolCount > 1){
    return 1;
  }
}

function checkStrength(password) {
  let score = 0;
  if (password.length < 6){
    return {
      message: 'Short',
      className: 'short'
    };
  } else {

    if (1 == checkCase(password)){
      score += 1;
    }

    if (checkCharAndNum(password)){
      score += 1;
    }
    
    if (checkSymbols(password)){
      score += 1;
    }
  }

  if (score < 2) {
    return {
      message: 'Weak Password',
      className: 'weak'
    };
  }

  if (score > 2) {
    return {
      message: 'Strong Password',
      className: 'strong'
    };
  }

  if (score = 2) {
    return {
      message: 'Good Password',
      className: 'good'
    };
  }


  return {
    message: 'Not done',
    className: 'none'
  };
}

// You do not need to change this function. You may want to read it -- as you will find parts of it helpful with
// the countdown widget.
function showResult(password) {

  const { message, className } = checkStrength(password);

  if(!message || !className) {
    console.error("Found undefined message or className");
    console.log("message is", message);
    console.log("className is", className);
  }

  // This gets a javascript object that represents the <span id="pwdresult"></span> element
  // Using this javascript object we can manipulate the HTML span by
  // changing it's class and text content
  const resultElement = document.getElementById("pwdresult");

  // This sets the class to one specific element (since you can have multiple classes it's a list)
  resultElement.classList = [className];
  // This sets the text inside the span
  resultElement.innerText = message;
}

// Add a listener for the strength checking widget
function addPasswordListener() {
  let passwordEntry = document.getElementById('password');
  passwordEntry.addEventListener("keyup", () => {
    const password = passwordEntry.value;
    showResult(password);
  });
}

addPasswordListener();

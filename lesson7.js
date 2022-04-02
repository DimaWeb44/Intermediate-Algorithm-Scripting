let isUpperCase = function(letter) {
  return letter.toUpperCase() === letter;
}

let myReplace = function(text, before, after) {
  let correctLetter = isUpperCase(before[0]) ? after.charAt(0).toUpperCase() : after.charAt(0).toLowerCase();
  let newAfter = correctLetter + after.substr(1);
  return text.replace(before, newAfter);
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");

export function isVowelsCorrect(vowel2, inputVowel2, vowel3, inputVowel3) {
  const isVowelsCorrect = inputVowel2 === vowel2 && inputVowel3 === vowel3;
  const isVowelsNotEmpty = inputVowel2 !== '' && inputVowel3 !== '';
  if (isVowelsCorrect) {
    console.log("vowels correct!!!");
    return true;
  } else if (isVowelsNotEmpty) {
    // precondition: vowels are not correct
    console.log("try again!!!");
    return false;
  }
};

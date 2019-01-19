export function handleKeyPress(event) {
  if (event.key == 'Enter') {
    console.log('enter has been clicked!')
    if (isVowelsCorrect(this.state.vowel2, this.props.firstVerb.vowel2, this.state.vowel3, this.props.firstVerb.vowel3)) {
      this.props.goToNextPage(this.props.history);
    } else {
      this.props.goToTryAgain(this.props.history);
    }
  }
}

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
}

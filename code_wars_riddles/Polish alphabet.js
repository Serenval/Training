function correctPolishLetters (string) {
  const correctedString = string.split('').map(char => {
    switch(char) {
      case 'ą':
        return 'a';
      case 'ć':
        return 'c';
      case 'ę':
        return 'e';
      case 'ł':
        return 'l';
      case 'ń':
        return 'n';
      case 'ó':
        return 'o';
      case 'ś':
        return 's';
      case 'ź':
        return 'z';
      case 'ż':
        return 'z';
      default:
        return char;
    }
  });
  return correctedString.join('');
}

console.log(correctPolishLetters('Błądziński'));


function validateHello(greetings) {
  const words  = [
    'ciao',
    'salut',
    'hallo',
    'hello',
    'hola',
    'ahoj',
    'czesc'
  ];
  
  return words.some(word => greetings.includes(word));
}

console.log(validateHello('bob'));
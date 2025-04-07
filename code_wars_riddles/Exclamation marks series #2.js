function remove(string) {  
  stringArray = string.split('');
  for( let i = stringArray.length - 1; i < stringArray.length; i--){
    if (stringArray[i] == "!") {
      stringArray[i] = stringArray[i].replace("!", "");
    } else {
      return stringArray.join('');
    }
  }
}

console.log(remove("hi!"));
console.log(remove("hi!!"));
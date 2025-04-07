String.prototype.digit = function() {
  // RegExp literal does not require quotes to define
  return /^\d{1}$/.test(this);
};

console.log('1\n'.digit());
console.log('2'.digit());


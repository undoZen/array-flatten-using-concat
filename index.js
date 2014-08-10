Array.prototype.flatten = function () {
  var flattened = Array.prototype.concat.apply([], this);
  if (flattened.length == this.length) return flattened;
  else return flattened.flatten();
}

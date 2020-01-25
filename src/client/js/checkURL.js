function checkURL(inputText) {
  var regex = RegExp('^(http|https):\/\/');
  if (regex.test(inputText) == false) {
      alert('The url is not valid! It needs to start with \"http(s)://\".');
      return false;
  } else {
      alert('The url is valid.');
      return true;
  }
}

export { checkURL }

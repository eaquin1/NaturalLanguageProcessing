function checkURL(inputText) {
  let regex = RegExp('^(http|https):\/\/');
  if (regex.test(inputText) == false) {
      alert('The url is not valid! It needs to start with \"http(s)://\".');
      return false;
  } else {
      return true;
  }
}

export { checkURL }

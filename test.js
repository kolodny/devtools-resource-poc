(function toggle() {
  $('h1').text(getText).fadeToggle(500, toggle);
})();

function getText() {
  return 'The text'
}

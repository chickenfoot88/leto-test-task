window.onload = function() {

  var element = document.querySelector('.button-order__text');

  /*
   * Call the polyfill
   *
   * patternID : the unique ID of the SVG pattern
   * patternURL : the URL to the background-image
   * class : the css-class applied to the SVG
   */
  element.backgroundClipPolyfill({
    'patternID' : 'В лето',
    'patternURL' : 'url/to/background/pattern',
    'class' : 'button-order__text'
  });
};

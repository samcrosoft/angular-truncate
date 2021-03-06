// Generated by CoffeeScript 1.6.3
angular.module("truncate", []).filter("characters", function() {
  return function(sText, iCharsLength, sAppend, bBreakOnWord) {
    var lastspace;
    if (sAppend == null) {
      sAppend = '...';
    }
    if (isNaN(iCharsLength)) {
      iCharsLength = 10;
    }
    if (iCharsLength <= 0) {
      return "";
    }
    if (sText && sText.length >= iCharsLength) {
      sText = sText.substring(0, iCharsLength);
      if (!bBreakOnWord) {
        lastspace = sText.lastIndexOf(" ");
        if (lastspace !== -1) {
          sText = sText.substr(0, lastspace);
        }
      } else {
        sText = sText.replace(/\s+$/, '');
      }
      return sText + ("" + sAppend);
    }
    return sText;
  };
}).filter("words", function() {
  return function(sText, iWordsLength, sAppend) {
    var inputWords;
    if (sAppend == null) {
      sAppend = '...';
    }
    if (isNaN(iWordsLength)) {
      iWordsLength = 10;
    }
    if (iWordsLength <= 0) {
      return "";
    }
    if (sText) {
      inputWords = sText.split(/\s+/);
      if (inputWords.length > iWordsLength) {
        sText = inputWords.slice(0, iWordsLength).join(" ") + ("" + sAppend);
      }
    }
    return sText;
  };
});

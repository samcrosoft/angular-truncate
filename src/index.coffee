angular.module("truncate", [])
.filter("characters", ->
  (sText, iCharsLength, sAppend='...', bBreakOnWord) ->
    # return full text if characters length is not set
    iCharsLength  = 10 if isNaN(iCharsLength)
    return ""  if iCharsLength <= 0
    if sText and sText.length >= iCharsLength
      sText = sText.substring(0, iCharsLength)
      unless bBreakOnWord
        lastspace = sText.lastIndexOf(" ")
        sText = sText.substr(0, lastspace)  if lastspace isnt -1
      else
        # trim the space from the right of the text
        sText = sText.replace(/\s+$/, '')
        # sText = sText.substr(0, sText.length - 1)  while sText.charAt(sText.length - 1) is " "
      return sText + "#{sAppend}"
    sText
).filter "words", ->
  (sText, iWordsLength, sAppend = '...') ->
    # return sText  if isNaN(iWordsLength)
    iWordsLength = 10 if isNaN(iWordsLength)
    return ""  if iWordsLength <= 0
    if sText
      inputWords = sText.split(/\s+/)
      sText = inputWords.slice(0, iWordsLength).join(" ") + "#{sAppend}"  if inputWords.length > iWordsLength
    sText

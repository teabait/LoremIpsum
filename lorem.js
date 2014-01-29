var LoremIpsumGen = function(listOfWords, num) {
  this.listOfWords = listOfWords.split(" ");
  this.num = num;
}

var Sentence = function(words) {
  this.toString = words.join(" ");
}

var Paragraph = function() {
  this.sentences = [];
  this.toString = this.sentences.join(" ");
}

LoremIpsumGen.prototype.createSentence = function(){
  var sentenceWords = [];
  // varied sentence length
  for(var i = 0; i <= Math.floor(Math.random() * 8) + 4; i++) {
    // get random word from input list
    sentenceWords.push(this.listOfWords[Math.floor(Math.random()*this.listOfWords.length)]);
    var sentence = new Sentence(sentenceWords);
    return sentence.toString;
  }
}

module.exports = LoremIpsumGen;

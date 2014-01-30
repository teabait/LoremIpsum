//   __ _ _ __  _ __
//  / _` | '_ \| '_ \
// | (_| | |_) | |_) |
//  \__,_| .__/| .__/
//       |_|   |_|

var LoremIpsumGen = function(listOfWords, num) {
  this.listOfWords = listOfWords.split(" ");
  this.num = num;
  this.wordBucket = [];
}

//                 _
//  ___  ___ _ __ | |_ ___ _ __   ___ ___
// / __|/ _ \ '_ \| __/ _ \ '_ \ / __/ _ \
// \__ \  __/ | | | ||  __/ | | | (_|  __/
// |___/\___|_| |_|\__\___|_| |_|\___\___|

var Sentence = function(words) {
  this.words = words;
}

// make sentence presentable:
// array to string
// capitalize first letter
// add punctuation at end
Sentence.prototype.toString = function () {
  this.words[0] = this.words[0].charAt(0).toUpperCase() + this.words[0].slice(1);
  return this.words.join(" ") + ".";
}
//                                              _
//  _ __   __ _ _ __ __ _  __ _ _ __ __ _ _ __ | |__
// | '_ \ / _` | '__/ _` |/ _` | '__/ _` | '_ \| '_ \
// | |_) | (_| | | | (_| | (_| | | | (_| | |_) | | | |
// | .__/ \__,_|_|  \__,_|\__, |_|  \__,_| .__/|_| |_|
// |_|                    |___/          |_|

var Paragraph = function() {
  this.sentences = [];
}

// turns array of sentences into a cohesive paragraph
Paragraph.prototype.toString = function () {
  return this.sentences.join(" ");
}

//                        __                  _   _
//   __ _ _ __  _ __     / _|_   _ _ __   ___| |_(_) ___  _ __  ___
//  / _` | '_ \| '_ \   | |_| | | | '_ \ / __| __| |/ _ \| '_ \/ __|
// | (_| | |_) | |_) |  |  _| |_| | | | | (__| |_| | (_) | | | \__ \
//  \__,_| .__/| .__/   |_|  \__,_|_| |_|\___|\__|_|\___/|_| |_|___/
//       |_|   |_|

// creates a blob of n words, n being the number of words user asks for
LoremIpsumGen.prototype.fillBucket = function() {
  for(var i = 0; i < this.num; i++) {
    this.wordBucket.push(this.listOfWords[Math.floor(Math.random()*this.listOfWords.length)].toLowerCase());
  }
  return this.wordBucket;
}

// creates sentence made of words from this.wordBucket
// each sentence is 4-12 words long
// returns sentence as a string
LoremIpsumGen.prototype.createSingleSentence = function () {
  var sentenceWords = [];
  // varied sentence length
  var numWords = Math.floor(Math.random() * 8) + 4;
  //if wordBucket.length > numWords, run it numWords times
  //  else run it wordBucket.length times
  if(this.wordBucket.length < numWords) {
    numWords = this.wordBucket.length;
  }
  for(var i = 0; i < numWords; i++) {
    // get random word from input wordBucket
    var firstWord = this.wordBucket.shift();
    sentenceWords.push(firstWord);
  }
  console.log(sentenceWords);
  var sentence = new Sentence(sentenceWords);
  console.log(sentence.toString());
  return sentence.toString();
}

LoremIpsumGen.prototype.createAllSentences = function () {
  var sentences = [];

  while (this.wordBucket.length > 0) {
    sentence = this.createSingleSentence();
    sentences.push(sentence);
  }
  // console.log(sentences.join(" "));
  return sentences;
};

module.exports = LoremIpsumGen;

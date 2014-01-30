var Lorem = require('./lorem');

describe("Lorem", function() {

  it("requires user input", function() {
    expect(function() { new Lorem();} ).toThrow("Cannot call method 'split' of undefined");
  });

  it("fills word bucket up to user input", function() {
    var lorem = new Lorem("harry potter hermione ron", 10);
    lorem.fillBucket();
    expect(lorem.wordBucket.length).toEqual(10);
  });

  it("returns a sentence as a string", function() {
    var lorem = new Lorem("harry potter hermione ron", 10);
    lorem.fillBucket();
    var result = lorem.createSingleSentence();
    expect(typeof result).toEqual("string");
  });

  it("creates a bunch of sentences with total word count equal to user specified count", function() {
    var lorem = new Lorem("harry potter hermione ron", 30);
    lorem.fillBucket();
    var sentences = lorem.createAllSentences();
    var result = sentences.join(" ").split(" ");
    expect(result.length).toEqual(30);
  });

});

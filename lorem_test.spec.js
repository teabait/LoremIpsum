var Lorem = require('./lorem');

describe("Lorem", function() {

  it("requires user input", function() {
    expect(function() { new Lorem();} ).toThrow("Cannot call method 'split' of undefined");
  });

  it("fills word bucket up to user input", function() {
    var lorem = new Lorem("Harry Potter Hermione Ron", 10);
    lorem.fillBucket();
    expect(lorem.wordBucket.length).toEqual(10);
  });

  it("returns a sentence as a string", function() {
    var lorem = new Lorem("Harry Potter Hermione Ron", 10);
    var result = lorem.createSingleSentence();
    expect(typeof result).toEqual("string");
  });

});

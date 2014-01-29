var Lorem = require('./lorem');

describe("Lorem", function() {
  var lorem = new Lorem("Harry Potter Hermione Ron", 5);

  it("requires user input", function() {
    expect(function() { new Lorem();} ).toThrow("Cannot call method 'split' of undefined");
  });

  it("returns a sentence as a string", function() {
    var result = lorem.createSentence();
    expect(typeof result).toEqual("string");
  });

});

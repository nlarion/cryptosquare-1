describe('cryptosquare', function() {
  it("will return text without punctionation, spacing or upperscase letters and return characters organized into rows and columns. Number of columns equal to square root of closest greater perfect square.", function() {
    expect(cryptosquare("Have a nice day, and chill out.")).to.eql(["havea", "niced", "ayand", "chill", "out"]);
  });


});

describe('cryptosquare', function() {
  it("will return text without punctionation, spacing or upperscase letters", function() {
    expect(cryptosquare("Have a nice day, and chill out.")).to.equal('haveanicedayandchillout');
  });


});

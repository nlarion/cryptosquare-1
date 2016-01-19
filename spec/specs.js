describe('cryptosquare', function() {
  it("will return text without punctionation & spacing", function() {
    expect(cryptosquare("Have a nice day, and chill out.")).to.equal('Haveanicedayandchillout');
  });


});

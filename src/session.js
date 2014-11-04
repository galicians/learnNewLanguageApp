function Session() {
  this.words
  this.questions = []
  this.roundAnswers = []
  this.learning
  this.mTongue
}

Session.prototype._generateRandNumber =  function() {
  var total = this.words.length - 1
  return Math.floor(Math.random() * total)
}

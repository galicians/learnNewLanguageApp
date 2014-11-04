function Session() {
  this.words
  this.questions = []
  this.roundAnswers = []
  this.learning
  this.mTongue
  this.user
  this.score
}

Session.prototype._generateRandNumber =  function() {
  var totalWords = this.words.length - 1
  return Math.floor(Math.random() * totalWords)
}

Session.prototype.generateNewQuestion = function() {
  var randNumber = this._generateRandNumber() 
  while(this._isQuestionRepeated(randNumber)){ randNumber = this._generateRandNumber() }
  this.questions.push(randNumber) 
  // this._isQuestionRepeated(randNumber) ? this.questions.push(randNumber) : this.generateNewQuestion()
}

Session.prototype._isQuestionRepeated = function(num) {
  return this.questions.indexOf(num) !== -1
}
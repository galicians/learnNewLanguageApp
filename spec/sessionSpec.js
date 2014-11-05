
describe("A study session", function() {

	var session

	beforeEach(function() {
		session = new Session
		session.words = words
		session.learning = 'es'
	})

	it("should be defined", function() {
		expect(session).toBeDefined()
	})

	it("needs questions to be defined", function() {
		expect(session.questions).toBeDefined()
	})

	it("needs roundAnswers to be defined", function() {
		expect(session.roundAnswers).toBeDefined()
	})

	it("needs score to be defined", function() {
		expect(session.score).toBeDefined()
	})

	it("should accept words", function() {
		expect(session.words).toBe(words)
	})

	it("should generate random numbers", function() {
		expect(session._generateRandNumber()).toBeLessThan(session.words.length)
		expect(session._generateRandNumber()).toBeGreaterThan(-1)
	})

	it("knows when a question is repeated", function() {
		session.questions.push(1)
		expect(session._isQuestionRepeated(1)).toBeTruthy()
	})

	it("generates a new question from words", function() {
		session.generateNewQuestion()
		expect(session.questions.length).toEqual(1)
	})

	it("can access to the current question", function() {
		session.generateNewQuestion()
		expect(session.words).toContain(session.currentQuestion())
	})

	it("knows what is the correct response to the current question", function() {
		session.generateNewQuestion()
		expect(session.correctResponse()).toEqual(session.currentQuestion()['es'])
	})

	it("knows when a response is repeated in a round", function(){
		session.roundAnswers.push(words[0]['es'])
		expect(session.isResponseRepeated(0)).toBeTruthy()
	})

	it("generates a fake answer", function() {
		session.generateNewQuestion()
		expect(session.generateFakeAnswer()).not.toEqual(session.correctResponse())
	})

	it("generates as many answers as you need per round", function() {
		session.generateNewQuestion()
		session.generateAnswers(2)
		expect(session.roundAnswers.length).toEqual(3)
	})

	it("includes the correct response between the answers generated", function() {
		session.generateNewQuestion()
		session.generateAnswers(4)
		expect(session.roundAnswers).toContain(session.correctResponse())
	})

	it("provides the current round", function() {
		session.generateNewQuestion()
		expect(session.currentRound()).toEqual(1)
	})

	it("knows when the user response is correct", function() {
		session.questions.push(0)
		expect(session.isUserResponseCorrect('Buenos días')).toBeTruthy()
	})

	it("the number of points per correct answer can be modified between rounds", function() {
		session.roundPoints = 5
		expect(session.roundPoints).toEqual(5)
	})

	it("keeps the count of the points per round on score", function() {
		session.roundPoints = 5
		session.questions.push(1)
		session.updateScore('Buenos días')
		expect(session.score[0]).toEqual(5)
	})

	it("provides the keyphrase of the current question", function() {
		session.questions.push(1)
		expect(session.getKeyphrase()).toEqual("A conventional expression of greeting or farewell used in the morning.")
	})

})
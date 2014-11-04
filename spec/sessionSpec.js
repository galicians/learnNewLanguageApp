
describe("A study session", function() {

	var session

	beforeEach(function() {
		session = new Session
		session.words = words
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

})

describe("A study session", function() {

	var session

	beforeEach(function() {
		session = new Session
		session.words = words
	})

	it("should be defined", function() {
		expect(session).toBeDefined()
	})

	it("should accept words", function() {
		expect(session.words).toBe(words)
	})

	it("should generate random numbers", function() {
		expect(session._generateRandNumber()).toBeLessThan(session.words.length)
		expect(session._generateRandNumber()).toBeGreaterThan(-1)
	})


})
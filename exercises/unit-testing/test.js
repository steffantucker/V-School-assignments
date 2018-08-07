const chai = require('chai');
const myFunctions = require('./app');
const assert = chai.assert;
const addS = myFunctions.addS

describe('Create a function that adds an \'s\' to the end of every word in an array', function() {
	it('should end with an \'s\'', () => {
		assert.deepEqual(addS(['dog', 'cat', 'alligator']), ['dogs', 'cats', 'alligators']);
		assert.deepEqual(addS(['apple', 'cat', 'alligator']), ['apples', 'cats', 'alligators']);
		assert.deepEqual(addS(['dog', 'narwhal', 'alligator']), ['dogs', 'narwhals', 'alligators']);
		assert.deepEqual(addS(['dog', 'cat', 'troll']), ['dogs', 'cats', 'trolls']);
	})
	it('should not allow numbers in array', () => {
		assert.equal(addS([1,2,'cat']), 'No numbers allowed');
	})
	it('should not add an \'s\' if the word already ends in an \'s\'', () => {		
		assert.deepEqual(addS(['dog', 'cats', 'alligator']), ['dogs', 'cats', 'alligators']);
		assert.deepEqual(addS(['dogs', 'cats', 'alligator']), ['dogs', 'cats', 'alligators']);
		assert.deepEqual(addS(['dogs', 'cats', 'alligators']), ['dogs', 'cats', 'alligators']);
	})
})
// check that shuffleArray returns an array
// check that it returns an array of the same length as the argument sent in
// check that all the same items are in the array
// check that the items have been shuffled around

const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    // CODE HERE
    test('return an array', () => {
        const input = [1, 2, 3]
        const output = shuffleArray(input)
        expect(Array.isArray(output)).toBe(true)
    })

    test('return an array of the same length as the input', () => {
        const input = [1, 2, 3]
        const output = shuffleArray(input)
        expect(output).toHaveLength(input.length)
    })
})
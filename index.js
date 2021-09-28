module.exports = assert

assert.equal = function assertEqual(l, r, m) {
  if (l != r) {
    var err = new AssertionError(m || 'Assertion failed: ' + l + ' != ' + r)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(err, assert)
    }
    throw err
  }
}

assert.strictEqual = function assertEqual(l, r, m) {
  if (l !== r) {
    var err = new AssertionError(m || 'Assertion failed: ' + l + ' !== ' + r)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(err, assert)
    }
    throw err
  }
}

class AssertionError extends Error {}
AssertionError.prototype.name = 'AssertionError'

/**
 * Minimal assert function
 * @param  {any} t Value to check if falsy
 * @param  {string=} m Optional assertion error message
 * @throws {AssertionError}
 */
function assert(t, m) {
  if (!t) {
    var err = new AssertionError(m || 'Assertion failed: ' + t)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(err, assert)
    }
    throw err
  }
}

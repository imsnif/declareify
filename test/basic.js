import test from 'tape'
import browserify from 'browserify'
import declareify from '../'

test('Correctly declare undeclared var in module.exports', function(t) {
  t.plan(1)
  let b = browserify(`${__dirname}/lib/sample.js`)
  b.transform(declareify)
  b.bundle((err, buf) => {
    if (err) return t.fail(err)
    let result = buf.toString('utf8')
    let match = /var\ssample/.exec(result)
    t.notEqual(match, null)
  })
})


const { test, describe } = require('node:test')
const { equal } = require('node:assert')


const { ShortcutSDK } = require('..')


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await ShortcutSDK.test()
    equal(null !== testsdk, true)
  })

})

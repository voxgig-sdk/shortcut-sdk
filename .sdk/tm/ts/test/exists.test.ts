
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { ShortcutSDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await ShortcutSDK.test()
    equal(null !== testsdk, true)
  })

})

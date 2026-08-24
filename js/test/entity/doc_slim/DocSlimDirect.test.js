
const envlocal = __dirname + '/../../../.env.local'
require('dotenv').config({ quiet: true, path: [envlocal] })

const { test, describe } = require('node:test')
const assert = require('node:assert')


const { ShortcutSDK } = require('../../..')

const {
  envOverride,
} = require('../../utility')


describe('DocSlimDirect', async () => {

  test('direct-exists', async () => {
    const sdk = new ShortcutSDK({
      // Concrete base: a live construction must satisfy any server
      // variables a templated base URL declares; overriding base with a
      // literal (as the direct flow tests do) sidesteps the requirement.
      base: 'http://localhost:8080',
      system: { fetch: async () => ({}) }
    })
    assert('function' === typeof sdk.direct)
    assert('function' === typeof sdk.prepare)
  })


  test('direct-list-doc_slim', async () => {
    const setup = directSetup([{ id: 'direct01' }, { id: 'direct02' }])
    const { client, calls } = setup

    const params = {}

    const result = await client.direct({
      path: 'api/v3/documents',
      method: 'GET',
      params,
    })

    assert(result.ok === true)
    assert(result.status === 200)
    assert(Array.isArray(result.data))

    if (!setup.live) {
      assert(result.data.length === 2)
      assert(calls.length === 1)
      assert(calls[0].init.method === 'GET')
    }
  })

})



function directSetup(mockres) {
  const calls = []

  const env = envOverride({
    'SHORTCUT_TEST_DOC_SLIM_ENTID': {},
    'SHORTCUT_TEST_LIVE': 'FALSE',
    'SHORTCUT_APIKEY': 'NONE',
  })

  const live = 'TRUE' === env.SHORTCUT_TEST_LIVE

  if (live) {
    const client = new ShortcutSDK({
      apikey: env.SHORTCUT_APIKEY,
    })

    let idmap = env['SHORTCUT_TEST_DOC_SLIM_ENTID']
    if ('string' === typeof idmap && idmap.startsWith('{')) {
      idmap = JSON.parse(idmap)
    }

    return { client, calls, live, idmap }
  }

  const mockFetch = async (url, init) => {
    calls.push({ url, init })
    return {
      status: 200,
      statusText: 'OK',
      headers: {},
      json: async () => (null != mockres ? mockres : { id: 'direct01' }),
    }
  }

  const client = new ShortcutSDK({
    base: 'http://localhost:8080',
    system: { fetch: mockFetch },
  })

  return { client, calls, live, idmap: {} }
}
  

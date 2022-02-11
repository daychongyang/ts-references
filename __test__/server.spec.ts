import { version } from '../src/server'

test('server version', () => {
  expect(version).toEqual('0.0.1')
})

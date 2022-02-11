import { version } from '../src/client'

test('client version', () => {
  expect(version).toEqual('0.0.1')
})

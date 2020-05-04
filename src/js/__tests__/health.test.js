import { char, hp } from '../../index.js';

hp()

test('Health test', () => {
  expect(char.health).toBe(90)
})

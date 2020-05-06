import { char, hp } from '../../index.js';

hp()

test('Healthy', () => {
  expect(hp()).toBe('Healthy')
})

test('Unhealthy', () => {
  expect(hp()).toBe('Wounded')
})

test('Almost dead', () => {
  expect(hp()).toBe('Critical')
})
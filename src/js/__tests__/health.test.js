import { char } from '../../index';

test('Healthy', () => {
  expect(char.health).toBeGreaterThan(50)
})

test('Wounded', () => {
  expect(char.health).toBeLessThanOrEqual(50)
})

test('Critical', () => {
  expect(char.health).toBeLessThan(15)
})
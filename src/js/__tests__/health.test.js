import { wizard, swordsman, bowman } from '../../index';

test('Healthy', () => {
  expect(wizard.health).toBeGreaterThan(50)
})

test('Wounded', () => {
  expect(swordsman.health).toBeLessThanOrEqual(50)
})

test('Critical', () => {
  expect(bowman.health).toBeLessThan(15)
})
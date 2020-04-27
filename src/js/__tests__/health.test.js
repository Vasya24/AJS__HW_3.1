/* eslint-disable linebreak-style */
import char from '../../index.js';

test('Healthy', () => {
  expect(char.health).toBeGreaterThanOrEqual(50);
  return 'healthy';
});
test('Wounded', () => {
  expect(char.health).toBeGreaterThanOrEqual(15);
  return 'wounded';
});
test('Critical', () => {
  expect(char.health).toBeGreaterThanOrEqual(1);
  return 'critical';
});

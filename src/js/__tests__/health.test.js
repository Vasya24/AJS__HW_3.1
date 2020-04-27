/* eslint-disable linebreak-style */
import char from '../../index.js';

test('Healthy', () => {
  expect(char.health).toBeGreaterThanOrEqual(50);
  // eslint-disable-next-line no-console
  console.log('healthy');
});
test('Wounded', () => {
  expect(char.health).toBeGreaterThanOrEqual(15);
  // eslint-disable-next-line no-console
  console.log('wounded');
});
test('Critical', () => {
  expect(char.health).toBeGreaterThanOrEqual(1);
  // eslint-disable-next-line no-console
  console.log('critical');
});

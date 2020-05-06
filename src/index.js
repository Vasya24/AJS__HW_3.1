/* eslint-disable linebreak-style */
const char = {
  name: 'Маг',
  health: 90,
};

function hp() {
  if (char.health > 50) {
    console.log('Healthy')
  };
  if (char.health < 50 || char.health > 15) {
    console.log('Wounded')
  };
  if (char.health < 15 || char.health > 0) {
    console.log('Critical')
  };
}

export { char, hp }

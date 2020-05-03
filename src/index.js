/* eslint-disable linebreak-style */
const char = {
  name: 'Маг',
  health: 90,
  color: ''
};

let hp = (function() {
  if (char.health > 50) {
    return char.color = 'Green';
  } else if (char.health < 50 || char.health > 15) {
    return char.color = 'Yellow';
  } else if (char.health < 15 || char.health > 0) {
    return char.color = 'Red';
  } else {
    alert('Oops, you are dead!')
  };
}())

export { char, hp }

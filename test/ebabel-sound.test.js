'use strict';

const Sound = require('../src/ebabel-sound.js');

test('ebabelSound returns something other than undefined.', () => {
  const middleA = new Sound(0, 440, 0.2);
  expect(middleA !== undefined).toBe(true);
});

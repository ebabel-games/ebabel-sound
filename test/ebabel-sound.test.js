'use strict';

const Sound = require('../src/ebabel-sound.js');

test('ebabelSound returns something other than undefined.', () => {
  const result = new Sound();
  expect(result !== undefined).toBe(true);
});

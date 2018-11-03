'use strict';

const { mockTHREE } = require('ebabel-mocks');
const ebabelSound = require('../src/ebabel-sound.js');

let THREE;
let scene;  /* eslint no-unused-vars:0 */

beforeEach(() => {
  THREE = mockTHREE;
  scene = new THREE.Scene();
});

test('ebabelSound returns something other than undefined.', () => {
  const result = ebabelSound();
  expect(result !== undefined).toBe(true);
});

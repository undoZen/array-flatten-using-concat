'use strict';

var assert = require('assert');
require('../');

describe('array flatten', function () {
  it ('flatten array', function () {
    assert.deepEqual([1, 2, 3, 4, 5, 6, 7, 8, 9], [1, [2, [3, [4, [5], 6], 7], 8], 9].flatten());
    assert.deepEqual([], [].flatten());
  });
});

import assert from 'assert';
import arrayModify from '../src/arrayModify';

assert(true);

assert.deepEqual(arrayModify(['abc', 'Bar', 'foo'], 'upper'), ['ABC', 'BAR', 'FOO']);
assert.deepEqual(arrayModify(['abc', 'Bar', 'foo'], 'capital'), ['Abc', 'Bar', 'Foo']);
assert.deepEqual(arrayModify(['123', 'Bar', 'foo'], 'capital'), ['123', 'Bar', 'Foo']);
assert.throws(() => arrayModify([true, 'Bar', 'foo'], 'upper'), Error);

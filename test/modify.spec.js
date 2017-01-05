import assert from 'assert';
import modify from '../src/modify';

assert(true);

assert.equal(modify('ABc', 'upper'), 'ABC');
assert.equal(modify('ABc', 'capital'), 'Abc');
assert.equal(modify('ABc', 'something'), 'ABc');
assert.throws(() => modify(123, 'upper'), Error);

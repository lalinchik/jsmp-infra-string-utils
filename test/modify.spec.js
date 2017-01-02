import {modify} from '../src/modify';
import assert from 'assert';

assert(true);

assert.equal(modify('ABc', 'upper'), 'ABC');
assert.equal(modify('ABc', 'capital'), 'Abc');
assert.equal(modify('ABc', 'something'), 'ABc');
assert.throws(() => modify(123, 'upper'), Error);
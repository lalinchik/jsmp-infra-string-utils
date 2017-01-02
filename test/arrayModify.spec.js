import {arrayModify} from '../src/index';
import assert from 'assert';

assert(true);

assert.deepEqual(arrayModify(['abc', 'Bar', 'foo'], 'upper'), ['ABC', 'BAR', 'FOO']);
assert.deepEqual(arrayModify(['abc', 'Bar', 'foo'], 'capital'), ['Abc', 'Bar', 'Foo']);
assert.deepEqual(arrayModify(['123', 'Bar', 'foo'], 'capital'), ['123', 'Bar', 'Foo']);
assert.throws(() => arrayModify([true, 'Bar', 'foo'], 'upper'), Error);

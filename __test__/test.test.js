import test from 'ava';
import message from '../dist/lib/index';

test('arrays are equal', t => {
	t.deepEqual([1, 2], [1, 2]);
});

test('message is Hello World!', t => {
	t.deepEqual('Hello world!!!!', message());
});
import { test } from '@jest/globals';

function helloWorld() {
  return 'hello world';
}

test('sample test', () => {
  expect(helloWorld()).toBe('hello world');
});

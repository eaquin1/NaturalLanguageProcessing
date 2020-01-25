import { checkURL } from './checkURL'

test('checking https://twitter.com is url', () => {
  expect(checkURL('https://twitter.com')).toBeTrue;
});

import { handleSubmit } from './formHandler'
import { checkURL } from './checkURL'

test('Testing that the data returned is an object', async () => {
  const data = await checkURL;
  expect(data).toBeInstanceOf(Object)
})

test('checkApi', () => {
  expect(handleSubmit).toBeInstanceOf(Function)
});

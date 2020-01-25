import { handleSubmit } from './formHandler'

test('checkApi', () => {
  expect(handleSubmit).toBeInstanceOf(Function)
});

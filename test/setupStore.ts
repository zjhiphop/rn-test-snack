/**
 * 
 * const mockComplete = jest.fn();
jest.mock('../src/store/TodoStore', () => {
 return {
   Todo: jest.fn().mockImplementation(() => {
     return {
       id: '',
       title: 'Test Todo',
       completed: false,
       complete: mockComplete,
     };
   }),
 };
});
 
beforeEach(() => {
 Todo.mockClear();
});
 */

jest.mock("../app/models", () => ({
  useStores: jest.fn().mockImplementation(() => "UserStore"), // use mocked value to test screen
}))

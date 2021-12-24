const Manager = require('../lib/Manager.js');

test('creates a manager object', () => {
  const manager = new Manager('Mickey Mouse', '999', 'mngr@improv.com', '355A');

  expect(manager.name).toBe('Mickey Mouse');
  expect(manager.id).toBe('999');
  expect(manager.email).toBe('mngr@improv.com');
  expect(manager.officeNumber).toBe('355A');
});

test('gets manager name, id, email and role', () => {
  const manager = new Manager('Mickey Mouse', '999', 'mngr@improv.com', '355A');
  expect(manager.getName()).toEqual(manager.name);
  expect(manager.getId()).toEqual(manager.id);
  expect(manager.getEmail()).toEqual(manager.email);
  expect(manager.getRole()).toEqual('Manager');
});

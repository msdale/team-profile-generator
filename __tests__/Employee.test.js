const Employee = require('../lib/Employee.js');

test('creates an employee object', () => {
  const employee = new Employee('jojo', '99', 'someid@improv.com');
  expect(employee.name).toBe('jojo');
  expect(employee.id).toBe('99');
  expect(employee.email).toBe('someid@improv.com');
});

test('gets employee name, id, email and role', () => {
  const employee = new Employee('jojo', '99', 'someid@improv.com');
  expect(employee.getName()).toEqual(employee.name);
  expect(employee.getId()).toEqual(employee.id);
  expect(employee.getEmail()).toEqual(employee.email);
  expect(employee.getRole()).toEqual('Employee');
});



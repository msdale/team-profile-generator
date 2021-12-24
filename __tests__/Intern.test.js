const Intern = require('../lib/Intern.js');

test('creates a intern object', () => {
  const intern = new Intern('Mogal Mouse', '777', 'intern@improv.com', 'Micky Academy');

  expect(intern.name).toBe('Mogal Mouse');
  expect(intern.id).toBe('777');
  expect(intern.email).toBe('intern@improv.com');
  expect(intern.school).toBe('Micky Academy');
});

test('gets intern name, id, email, school, and role', () => {
  const intern = new Intern('Mogal Mouse', '777', 'intern@improv.com', 'Micky Academy');

  expect(intern.getName()).toEqual(intern.name);
  expect(intern.getId()).toEqual(intern.id);
  expect(intern.getEmail()).toEqual(intern.email);
  expect(intern.getSchool()).toEqual(intern.school);
  expect(intern.getRole()).toEqual('Intern');
});

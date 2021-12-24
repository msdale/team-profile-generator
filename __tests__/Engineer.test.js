const Engineer = require('../lib/Engineer.js');

test('creates a engineer object', () => {
  const engineer = new Engineer('Monte Mouse', '888', 'engnr@improv.com', 'engnruser');

  expect(engineer.name).toBe('Monte Mouse');
  expect(engineer.id).toBe('888');
  expect(engineer.email).toBe('engnr@improv.com');
  expect(engineer.githubUser).toBe('engnruser');
});

test('gets engineer name, id, email, githubUser, and role', () => {
  const engineer = new Engineer('Monte Mouse', '888', 'engnr@improv.com', 'engnruser');

  expect(engineer.getName()).toEqual(engineer.name);
  expect(engineer.getId()).toEqual(engineer.id);
  expect(engineer.getEmail()).toEqual(engineer.email);
  expect(engineer.getGithubUser()).toEqual(engineer.githubUser);
  expect(engineer.getRole()).toEqual('Engineer');
});

import {RegisterService} from './register.service';
describe('tests for Registration Service', () => {
  let registerServise: RegisterService;
  const user = {name: 'John', password: 1};
  beforeEach(() => {
    registerServise = new RegisterService();
  });

  it ('Users should be aaray and be empty', () => {
    expect(registerServise.users).toEqual([]);
    expect(registerServise.users.length).toBe(0);
  });

  it ('Passwords should be array and be empty', () => {
    expect(registerServise.passwords).toEqual([]);
    expect(registerServise.passwords.length).toBe(0);
  });

  it ('getUsers should get all users from the list', () => {
    expect(registerServise.getusers()).toBe(registerServise.users);
  });

  it ('check method should check if user is in users array', () => {
    registerServise.addUsers(1);
    expect(registerServise.check(1)).toBe(true);
  });

  it ('method addUsers should add users in the array', () => {
    registerServise.addUsers(user);
    expect(registerServise.users[0].name).toBe('John');
    expect(registerServise.users[0].password).toBe(1);
  });

  it ('method deleteUsers should remove user from the list', () => {
    registerServise.addUsers(user);
    registerServise.deleteUser(user);
    expect(registerServise.check(user)).toBe(false);
  });
});

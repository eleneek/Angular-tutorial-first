import {LoginService} from './login.service';

describe('Auth service tests', () => {
  let loginService: LoginService ;
  beforeEach(() => {
    loginService = new LoginService();
  });
  it ('method allowAccess should change isAccessAllowed to true', () => {
    loginService.allowAccess();
    expect(loginService.isAccessAllowed).toBe(true);
  });
  it('Default value isAccessAllowed should be false', () => {
    expect(loginService.isAccessAllowed).toBe(false);
  });

  it('method isUserAuthenticated should return isAccessAllowed', () => {
    expect(loginService.isUserAuthenticated()).toBe(loginService.isAccessAllowed);
  });
  it ('method blockAccess should change isAccessAllowed to false', () => {
    loginService.blockAccess();
    expect(loginService.isAccessAllowed).toBe(false);
  });
});

import {AuthService} from './auth.service';

describe('Auth service tests', () => {
  let authService: AuthService ;
  beforeEach(() => {
    authService = new AuthService();
  });
  it ('method allowAccess should change isAccessAllowed to true', () => {
    authService.allowAccess();
    expect(authService.isAccessAllowed).toBe(true);
  });
  it('Default value isAccessAllowed should be false', () => {
    expect(authService.isAccessAllowed).toBe(false);
  });

  it('method isUserAuthenticated should return isAccessAllowed', () => {
    expect(authService.isUserAuthenticated()).toBe(authService.isAccessAllowed);
  });
  it ('method blockAccess should change isAccessAllowed to false', () => {
    authService.blockAccess();
    expect(authService.isAccessAllowed).toBe(false);
  });
});

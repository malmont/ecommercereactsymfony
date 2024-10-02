import { makeAutoObservable, runInAction } from "mobx";
import { LoginUser } from '../../../models/LoginUserModel'; 

class LoginViewModel {
  username = '';
  password = '';
  errorMessage = '';
  authContext;

  constructor(authContext) {
    makeAutoObservable(this);
    this.authContext = authContext; 
  }

  handleChange = (field, value) => {
    this[field] = value; 
  };

  handleLogin = async (e) => {
    e.preventDefault(); 
    this.errorMessage = '';

    try {
      const user = new LoginUser(this.username, this.password); 
      await this.authContext.login(user.username, user.password);
    } catch (error) {
      runInAction(() => {
        this.errorMessage = 'Login failed: ' + error.message; 
      });
    }
  };
}

export default LoginViewModel;

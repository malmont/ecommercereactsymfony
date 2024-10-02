import React, { useEffect } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { observer } from 'mobx-react-lite'; 
import { useDependencies } from '../../../DependencyContext';

const LoginView = observer(() => {
  const { loginViewModel } = useDependencies(); 
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    loginViewModel.handleLogin(e);
  };

  useEffect(() => {
    if (loginViewModel.authContext.user) {
      navigate('/dashboard');
    }
  }, [loginViewModel.authContext.user, navigate]);

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <Header>Login</Header>
        {loginViewModel.errorMessage && <ErrorMessage>{loginViewModel.errorMessage}</ErrorMessage>}
        <FormField>
          <input
            type="text"
            value={loginViewModel.username}
            onChange={(e) => loginViewModel.handleChange('username', e.target.value)}
            placeholder="Username"
            required
          />
        </FormField>
        <FormField>
          <input
            type="password"
            value={loginViewModel.password}
            onChange={(e) => loginViewModel.handleChange('password', e.target.value)}
            placeholder="Password"
            required
          />
        </FormField>
        <SubmitButton type="submit">Login</SubmitButton>
        <RegisterLink>
          Don't have an account? <NavLink to="/register">Register</NavLink>
        </RegisterLink>
      </Form>
    </Wrapper>
  );
});

const Wrapper = styled.div`
  background-color: #808080;
  min-height: 100vh;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Form = styled.form`
  background: #ffffff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
`;

const Header = styled.h1`
  font-size: 2.5em;
  color: #333;
  margin-bottom: 20px;
`;

const ErrorMessage = styled.p`
  color: #ff0000;
  margin-bottom: 20px;
`;

const FormField = styled.div`
  margin-bottom: 20px;

  input {
    width: 100%;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    box-sizing: border-box;
  }
`;

const SubmitButton = styled.button`
  background-color: #44545c;
  color: #ffffff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1em;
  
  &:hover {
    background-color: #70acac;
  }
`;

const RegisterLink = styled.p`
  margin-top: 20px;
  font-size: 1em;
  color: #333;

  a {
    color: #70acac;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export default LoginView;

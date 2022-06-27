import React, { useState } from 'react';
import { Link, Redirect, useHistory } from 'react-router-dom';
import Logo from '../../assets/Logo.svg';
import Input from '../../components/input';
import { getUser } from '../../hooks/getUser';
import { UserObject } from '../../interfaces/user.interface';
import http from '../../services/api';
import { Box, BoxInput, Wrapper, ButtonWrapper } from './styles';

function Login() {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const history = useHistory();
  const user = getUser();

  const redirectOnUser = (user: UserObject) => {
    localStorage.setItem('user', JSON.stringify(user));
    history.push('/journal');
  };

  const handleSubmit = async () => {
    if (!username || !password) {
      return setError('Username and password are required');
    }
    return await http
      .post('/auth/login', { username, password })
      .then((res: any) => redirectOnUser(res))
      .catch((err) => setError(err));
  };

  if (user.username) {
    return <Redirect to={'/journal'}></Redirect>;
  }

  return (
    <Wrapper>
      <img src={Logo} alt="Logo Nocturnal" />

      <Box>
        <h1>Sign in</h1>
        <Link to={'/register'}>
          <p>Sign up</p>
        </Link>
      </Box>
      <BoxInput>
        <Input
          label="Your username"
          id="login"
          type="text"
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          label="Your password"
          id="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </BoxInput>

      <p className="ForgotPassword">Forgot Password?</p>

      <ButtonWrapper>
        <button onClick={() => handleSubmit()}>Log In</button>
      </ButtonWrapper>

      <p className="Error">{error || '\u00A0'}</p>
    </Wrapper>
  );
}

export default Login;

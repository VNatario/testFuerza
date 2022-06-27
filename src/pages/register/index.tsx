import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Logo from '../../assets/Logo.svg';
import Input from '../../components/input';
import http from '../../services/api';
import { Box, BoxInput, Wrapper, ButtonWrapper } from './styles';

function Register() {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [error, setError] = useState<string>('');
  const history = useHistory();

  const redirectOnUser = () => {
    history.push('/');
  };

  const handleSubmit = async () => {
    if (!username || !password) {
      return setError('Username and password are required');
    }
    if (username && /\W|_/.test(username)) {
      return setError('Only alphanumeric characters are allowed');
    }
    if (email && !/\S+@\S+\.\S+/.test(email)) {
      return setError('Invalid email format');
    }
    return await http
      .post('/auth/signup', { username, password, email })
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      .then((res) => redirectOnUser())
      .catch((err) => setError(err));
  };

  return (
    <Wrapper>
      <img src={Logo} alt="Logo Nocturnal" />

      <Box>
        <h1>Sign Up</h1>
        <Link to={'/'}>
          <p>Already have an account</p>
        </Link>
      </Box>
      <BoxInput>
        <Input
          label="Define a username"
          id="username"
          type="text"
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          label="Set your password"
          id="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Input
          label="Email (optional)"
          id="email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </BoxInput>

      <ButtonWrapper>
        <button onClick={() => handleSubmit()}>Create account</button>
      </ButtonWrapper>

      <p className="Error">{error || '\u00A0'}</p>
    </Wrapper>
  );
}
export default Register;

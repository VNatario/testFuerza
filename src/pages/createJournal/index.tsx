import React, { useState } from 'react';
import Logo from '../../assets/Logo.svg';
import Cover from '../../assets/Cover.svg';
import { Wrapper, BoxLogo, BoxInput, BoxJournal, Button } from './styles';
import http from '../../services/api';
import { UserObject } from '../../interfaces/user.interface';
import { useHistory } from 'react-router-dom';
import { getUser } from '../../hooks/getUser';

function CreateJournal() {
  const [journal, setJournal] = useState('');
  const [error, setError] = useState('');
  const history = useHistory();
  const user = getUser();

  const redirectOnUser = (user: UserObject) => {
    localStorage.setItem('user', JSON.stringify(user));
    history.push('/journal');
  };

  const handleSubmit = async () => {
    if (!journal) {
      return setError('Journal title must not be empty');
    }
    return await http
      .post('/journals/', {
        title: journal,
        userId: user.id,
      })
      .then((res: any) => redirectOnUser(res))
      .catch((err) => console.error(err));
  };

  return (
    <Wrapper>
      <BoxLogo>
        <img src={Logo} alt="Logo nocturnal" />
      </BoxLogo>

      <BoxJournal>
        <img src={Cover} alt="Journal empty" />
        <div className="JournalName">
          <h2>{journal}</h2>
        </div>
      </BoxJournal>

      <BoxInput
        type="text"
        placeholder="Title"
        maxLength={40}
        required
        onChange={(e) => setJournal(e.target.value)}
      />

      <div className="Button">
        <Button onClick={() => handleSubmit()}>Save journal</Button>
      </div>

      <p className="Error">{error || '\u00A0'}</p>
    </Wrapper>
  );
}

export default CreateJournal;
